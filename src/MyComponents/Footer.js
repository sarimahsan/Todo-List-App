import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "100%",
    width: "100%",
  }
  return (
    <footer className = "bg-dark text-light py-2" style ={footerStyle}>
      <p className = "text-center">
      Copright &copy: MyTodoList.com
      </p>
      </footer>
  )
}
