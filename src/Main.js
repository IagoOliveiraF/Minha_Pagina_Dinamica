import "./CSS/Main.css";
import desktopPurple from './Assets/Devices-amico.svg';
import desktopGreen from './Assets/retro computer-bro.svg';


function Main() {
    return (
        <main className="main">
            <div className="wrapper">
                <section className="main__section">
                    <div className="main__section__ProductApresentation">
                        <h1>Automatize seu negócio com a TechWave</h1>
                        <p>Oferecemos soluções em software desenvolvidas para impulsionar a eficiência dos seus processos, com foco total na automação empresarial e no crescimento sustentável do seu negócio.</p>
                    </div>
                    <div className="main__section__ProductApresentationImg">
                        <img src={desktopPurple}></img>
                    </div>
                </section>
            </div>
        </main>
    )


}

export default Main;