import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
    console.log("Hellow is this connected??")
  }
  updateNavbar() {
    if (window.scrollY >= window.innerHeight) {
      this.element.classList.add("navbar-lewagon-transparent")
    } else {
      this.element.classList.remove("navbar-lewagon-transparent")
    }
  }
}
