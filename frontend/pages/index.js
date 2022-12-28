// Components
import MainContainer from '@components/Containers/MainContainer';
import Section from '@components/Containers/Section';
import Container from '@components/Containers/Container';

export default function Home() {
    return (
        <>
            <MainContainer>
                <h1>Typefobia</h1>
                <p>
                    Typefobia es el anti congreso tipográfico donde ofreceremos
                    contenido irresponsable sobre la <em>«cultura»</em> del
                    diseño de letras, tenemos el desinterés de ofrecer contenido
                    responsable para enriquecer las academias y el ego que se
                    encuentra dentro de la profesión.
                </p>
                <p>
                    El aprendizaje se da gracias a la sátira entre lo
                    convergente y divergente, es por esto que el anti congreso
                    se desmitifica a través de distintas actividades la palabra
                    tipografía.
                </p>
                <p>
                    Evento de entrada con cooperación sugerida a partir de $150
                    (no incluye consumo).
                </p>
            </MainContainer>
            <Section id='info'>
                <Container>
                    <h3>Fecha</h3>
                    <p>
                        La fecha estimada para el evento es entre finales de
                        Enero del 2023 y principios de Febrero del 2023
                    </p>
                </Container>
                <Container>
                    <h3>Locación</h3>
                    <p>Musa Cultura Visual</p>
                </Container>
            </Section>
        </>
    );
}
