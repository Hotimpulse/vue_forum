import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type { Component } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// const components = import.meta.glob('./components/App[A-Z]*.(vue|js)', { eager: true })
// const components = import.meta.glob('./components/**/*.vue', { eager: true })

const modules = import.meta.glob<{ default: Component }>('./components/App[A-Z]*.(vue|js)', {
  eager: true,
})

for (const path in modules) {
  const component = modules?.[path]?.default

  const name = path
    .split('/')
    .pop()!
    .replace(/\.\w+$/, '')

  if (component) {
    app.component(name, component)
  }
}

app.use(createPinia())
app.use(router)

app.mount('#app')
