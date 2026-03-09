import React from 'react'
import AuditIcon from "../../../../public/auditExpress.png"
import './banner.css'

const Banner = () => {
  return (
    <section className='banner-container'>
        <img src={AuditIcon.src} alt="" />
        <h1>Faire un audit <br /> de communication</h1>
        <div>
            <h2>Tu te demandes :</h2>
            <ul>
                <li>Le <span>site</span> internet est-il <span>obligatoire</span> ?</li>
                <li><span>Par où commencer</span> pour communiquer ?</li>
                <li><span>Comment</span> s&apos;occuper des ces <span>réseaux sociaux </span>?</li>
                <li><span>Comment m&apos;organier</span> pour avoir une communication régulière ?</li>
                <li><span>Faut-il communiquer de la même façon</span> sur ses différents réseaux ?</li>
            </ul>
        </div>
    </section>
  )
}

export default Banner