class testES6 {
  constructor(value) {
    this.value=value
  }

  testFn() {
    alert(this.value)
  }
}

window.testES6=testES6
