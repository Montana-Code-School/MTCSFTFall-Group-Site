const myDOMListeners = () => {

  const sayHello = () => {
    console.log("hello")
  }

  document
    .getElementById('btnOne')
    .addEventListener('click', sayHello)
}

export default myDOMListeners
