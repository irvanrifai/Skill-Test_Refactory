package main

import (
  "fmt"
  "html/template"
  "net/http"
  

  "log"

  "github.com/gorilla/pat"
  "github.com/markbates/goth"
  "github.com/markbates/goth/gothic"
  "github.com/markbates/goth/providers/google"
  "github.com/gorilla/sessions"
)


func main() {
  
  key := "Secret-session-key"  // Replace with your SESSION_SECRET or similar
  maxAge := 86400 * 30  // 30 days
  isProd := false       // Set to true when serving over https

  store := sessions.NewCookieStore([]byte(key))
  store.MaxAge(maxAge)
  store.Options.Path = "/"
  store.Options.HttpOnly = true   // HttpOnly should always be enabled
  store.Options.Secure = isProd

  gothic.Store = store

  goth.UseProviders(
    google.New("230340066675-01ueh1o8hmbnmp0rm94qmp0bpg09ie42.apps.googleusercontent.com", "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", "http://localhost:3000/auth/google/callback", "email", "profile"),
  )

  p := pat.New()
  p.Get("/auth/{provider}/callback", func(res http.ResponseWriter, req *http.Request) {

    user, err := gothic.CompleteUserAuth(res, req)
    if err != nil {
      fmt.Fprintln(res, err)
      return
    }
    t, _ := template.ParseFiles("templates/success.html")
    t.Execute(res, user)
  })

  p.Get("/auth/{provider}", func(res http.ResponseWriter, req *http.Request) {
    gothic.BeginAuthHandler(res, req)
  })

  p.Get("/", func(res http.ResponseWriter, req *http.Request) {
    t, _ := template.ParseFiles("templates/index.html")
    t.Execute(res, false)
  })
  log.Println("listening on localhost:3000")
  log.Fatal(http.ListenAndServe(":3000", p))
}