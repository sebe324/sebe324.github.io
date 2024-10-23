import './Education.css'
import { useState } from 'react'

function Education()
{

    const [expanded, setExpanded] = useState(false);

    return(
        <section id="education">
            <b>Edukacja</b>
            <br/>
            <br/>

                    <b>Technik Programista</b>
                    <h5 className='grayout-small'>Technikum Mechatroniczne nr 1 im. Piotra Drzewieckiego, Wiśniowa <br/> Wrzesień 2020 - Maj 2025</h5>
                    <div className={expanded ? "test test2" : "test"}>
                    <p>Podczas nauki w najlepszym technikum w Warszawie na kierunku technika programisty poznałem wiele technologii i języków programowania.
                        Kwalifikacja zawodowa składała się z 2 modułów:
                    </p>
                        <ul>
                            <li>
                                <b>INF.03 - Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych</b>
                                <p>
                                    Nauczyłem się podstaw tworzenia stron internetowych i zarządzaniem bazami danych. 
                                    Poznałem technologie takie jak HTML, CSS, JS, SQL i PHP.
                                </p>
                            </li>
                            <li>
                                <b>INF.04 -  Projektowanie, programowanie i testowanie aplikacji</b>
                                <p>
                                    Moduł ten polegał na programowaniu aplikacji desktopowych, mobilnych i webowych.
                                    Języki programowania i narzędzia jakie poznałem to między innymi: Android Studio, WPF, React, Angular, Qt, Spring.
                                </p>
                            </li>
                        </ul>
                        </div>
                        <div className={expanded ? "expandable noSelect expandable-rotate" : "expandable noSelect"} onClick={()=>{setExpanded(!expanded)}}>&#11167;</div>

        </section>
    )
}

export default Education