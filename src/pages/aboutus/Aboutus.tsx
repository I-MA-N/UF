import './css/aboutus.css';
import Container from "../common/Container"
import AboutText from './components/about/AboutText';
import Features from './components/features/Features';
import Members from './components/memebers/Members';
import LastText from './components/lastText/LastText';

function Aboutus() {
    return (
        <Container withTitle={false} sectionClassName='space-y-10'>
            <AboutText />

            <Features />

            <Members />

            <LastText />
        </Container>
    )
}

export default Aboutus