import { Application } from "@hotwired/stimulus"
import "bootstrap"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

console.log("Hello from app/javascript/application.js")

export { application }
