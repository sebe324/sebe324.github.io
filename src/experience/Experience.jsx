import './Experience.css'
import { useState } from 'react'
function Experience()
{
    const [expanded, setExpanded] = useState(false);

    return(
        <section id="experience">
            <b>Doświadczenie Zawodowe</b>
            <br/>
            <br/>

                    <b>Młodszy Programista (Staż)</b>
                    <h5 className='grayout-small'>B.A.T <br/> lipiec 2024 - aktualnie</h5>
                    <p>Obecnie pracuję w firmie British American Tobacco, gdzie projektuję, wdrażam i utrzymuję oprogramowanie wewnętrzne. Między innymi jest to:</p>
                    <ul>
                    <li>
                        Tworzenie dashboardów w New Relic łączących się z danymi z produkcji. Wdrożenie niestandardowego dashboardu zaprogramowanego w React.
                    </li>
                    <li>
                        Deployment chatbotów opartych na dokumentacji firmowej na Teams i aplikacje webowe. Zajmowałem się zarówno frontendem (React) jak i backendem (Python).
                    </li>
                    <li>
                        Implementacja rozwiązań zapewniających automatyczne testowanie, monitorowanie i wdrażanie aplikacji w Azure DevOps, CI/CD.
                    </li> 
                    <li>
                        Tworzenie i zarządzanie aplikacjami webowymi (Azure Web Apps) w Microsoft Azure, zapewniając skalowalność, wydajność i bezpieczeństwo aplikacji.
                    </li>
                    <li>
                        Implementacja i konfiguracja Azure Search do zapewnienia zaawansowanego wyszukiwania pełnotekstowego w aplikacjach.
                    </li>
                   </ul>
                <div className={expanded ? "test test2" : "test"}>
                    <b>Praktykant w dziale Inżynierii Oprogramowania</b>
                    <h5 className='grayout-small'>Diebold Nixdorf <br/> kwiecień 2024 - czerwiec 2024</h5>
                    <p>
                   W ramach szkolnych praktyk pracowałem w firmie Diebold Nixdorf w dziale inżynierii oprogramowania i wsparcia technicznego.
                   Do moich obowiązków należało:
                   </p>
                   <ul>
                    <li>
                        Wgrywanie nowego oprogramowania do bankomatów i testowanie go, naprawianie błędów.
                    </li>
                    <li>
                        Programowanie interfejsu użytkownika do bankomatu przy użyciu JS, JQuery, HTML, CSS. 
                    </li> 
                    <li>
                        Dokumentowanie projektu, konsultacje z resztą zespołu.
                    </li>
                   </ul>
                </div>
                <div className={expanded ? "expandable noSelect expandable-rotate" : "expandable noSelect"} onClick={()=>{setExpanded(!expanded)}}>&#11167;</div>
        </section>
    )
}

export default Experience