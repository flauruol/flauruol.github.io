import { GUI } from "./gui.js";
import {createPGGGame} from "./requests.js";

$(document).ready(main);

let indexPage;
let portfolioPage;

function main() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if (!isMobile) {
        particlesJS.load('particles-js', 'particlesjs-config.json', function() {
            console.log('callback - particles.js config loaded');
        });
	}
    index();
    $('#about').click(index);
    $('#portfolio').click(portfolio);
}

async function index() {
    if (indexPage === undefined) {
        indexPage = await GUI.getPage('html/index.html');
    }

    // $('#main').show(200)
    $('#main').html(indexPage);
    GUI.hideItems();
    $('#portfolio').removeClass('active');

    GUI.addYear(2022, 'publications');
    GUI.addPublication(
        {
            href: 'https://journals.asm.org/doi/abs/10.1128/mbio.03239-21',
            html: `<h1>A Phosphoinositide-Binding Protein Acts in the Trafficking Pathway of Hemoglobin in the Malaria
              Parasite <i>Plasmodium falciparum</i></h1>
                        <h2>Mukherjee, A., Crochetière, M-E., Sergerie, A., Amiar, S., Thompson, L., Ebrahimzadeh, Z., Gagnon, D., <b>Lauruol, F.</b>, Bourgeois, A.,
                        Galaup, T., Roucheray, S., Hallée, S., Padmanabhan, P., Stahelin, R., Dacks, J., Richard, D.</h2>
                        <h3>mBio. 2022 Jan 18;13(1):e0323921</h3>`
        }
    );

    GUI.addYear(2021, 'publications');
    GUI.addPublication(
        {
            href: 'https://journals.plos.org/plospathogens/article?id=10.1371/journal.ppat.1009329',
            html: `<h1>Structural and functional studies of the first tripartite protein complex at the <i>Trypanosoma brucei</i> flagellar pocket collar </h1>
                        <h2>Isch, C., Majneri, P., Landrein, N., Pivovarova, Y., Lesigang, J., <b>Lauruol, F.</b>, Robinson, DR., Dong, G., Bonhivers, M.</h2>
                        <h3>PLOS Pathogens 17, 8, e1009329</h3>`
        }
    );

    GUI.addYear(2019, 'publications')
    GUI.addPublication(
        {
            href: 'https://link.springer.com/article/10.1007/s00401-019-01973-6',
            html: `<h1>Demonstration of prion-like properties of mutant huntingtin fibrils in both in vitro and in vivo paradigms</h1>
                        <h2>Masnata, M.,Sciacca, G.,Maxan, A.,Bousset, L.,Denis, HL., <b>Lauruol, F.</b>,David, L.,Saint-Pierre, M.,Kordower,
                        J.,Melki, R.,Alpaugh, M.,Cicchetti, F.</h2>
                        <h3>Acta Neuropathologica volume 137, pages 981–1001 (2019)</h3>`
        }
    );

    GUI.addYear(2018, 'publications')
    GUI.addPublication(
        {
            href: 'https://www.nature.com/articles/s41380-018-0021-9',
            html: `<h1>Are immunotherapies for Huntington’s disease a realistic option?</h1>
                        <h2>Denis, Hélèna L.*,<b>Lauruol, F.*</b>,Cicchetti, F.</h2>
                        <h3>Molecular Psychiatry volume 24, pages 364–377 (2019)</h3>`
        }
    );

    GUI.addYear(2016, 'publications')
    GUI.addPublication(
        {
            href: 'http://journals.plos.org/plosntds/article?id=10.1371/journal.pntd.0005125',
            html: `<h1><i>Trypanosoma brucei</i> CYP51: Essentiality and Targeting Therapy in an Experimental Model</h1>
                        <h2>Dauchy, FA.,Bonhivers, M., Landrein, N., Dacheux, D., Courtois, P., <b>Lauruol, F.</b>,
                        Daulouède, S., Vincendeau, P., Robinson, DR.</h2>
                        <h3>PLOS Neglected Tropical Diseases 10, 11, e0005125</h3>`
        }
    );
    // $('#main').show();

    GUI.addYear(2021, 'poster')
    GUI.addPoster(
        {
            href: '/pdf/poster-2021.pdf',
            html: `<h1>Les protéines à domaine sec14 comme nouvelle cible thérapeutique contre le parasite de la malaria <i>Plasmodium falciparum</i> ?</h1>
                        <h2><b>Lauruol, F.</b>, Gagnon, D., Richard, D.</h2>
                        <h3>Journées de la recherche de la Faculté de médecine – Université Laval, Québec, Canada</h3>`
        }
    );

    GUI.addYear(2019, 'poster')
    GUI.addPoster(
        {
            href: 'https://event.fourwaves.com/fr/cb064209-1ccb-4b85-ae9b-23588192664d/pages',
            html: `<h1>Prionic properties of the mutant huntingtin protein</h1>
                        <h2>Masnata, M., Sciacca, G., Maxan, A., Bousset, L., Denis, H. L., <b>Lauruol, F.</b>,
                        David, L., Saint-Pierre, M., Kordower, J. H., Melki, R., Alpaugh, M., Cicchetti, F.</h2>
                        <h3>Journées de la recherche CHU de Québec – Université Laval, Québec, Canada</h3>`
        }
    );


    GUI.addYear(2018, 'poster')
    GUI.addPoster(
        {
            href: 'https://huntingtonstudygroup.org/about/our-annual-meeting/past-annual-meetings/',
            html: `<h1>Demonstration of prion-like properties of mutant huntingtin fibrils in in vitro paradigms</h1>
                        <h2>Masnata, M., Sciacca, G., Maxan, A., <b>Lauruol, F.</b>, Denis, H. L, David, L., Saint-Pierre, M.,
Kordower, J. H., Bousset, L., Melki, R., Alpaugh, M., Cicchetti, F.</h2>
                        <h3>Huntington Study Group: Unlocking HD, Houston, Texas, USA</h3>`
        }
    );

    GUI.addPoster(
        {
            href: 'https://drive.google.com/file/d/1SUTPPxLItKao63DXuRuM9uRrGntlGLXa/view',
            html: `<h1>Propagation of mutant huntingtin fibrils in in vitro and in vivo paradigms</h1>
                        <h2>Masnata, M., Sciacca, G., Maxan, A., Alpaugh, M., <b>Lauruol, F.</b>, David, L., Denis, H. L, Saint-
Pierre, M., Bousset, L., Melki, R., Cicchetti, F.</h2>
                        <h3>3 ème édition du Neurosymposium « Des Techniques au Cerveau - et inversement » - Grande Bibliothèque, Montréal, Canada</h3>`
        }
    );

    GUI.addYear(2017, 'poster')
    GUI.addPoster(
        {
            href: 'https://event.fourwaves.com/fr/cb1499a0-14b1-4858-a130-36acdeb2311a/resumes/e0a8166f-8e8c-42fb-9839-4a59fbf92314',
            html: `<h1>Étude des mécanismes de propagation de la forme mutante pathogène
de la protéine huntingtine chez <i>Caenorhabditis elegans</i></h1>
                        <h2><b>Lauruol, F.</b>, Dallaire, A., Simard, M., Cicchetti, F.</h2>
                        <h3>Journées de la Recherche en Santé – Université Laval, Québec, Canada</h3>`
        }
    );

    GUI.showItems();
}


async function portfolio() {
    $('#about').removeClass('active');

    if (portfolioPage === undefined) {
        portfolioPage = await GUI.getPage('html/portfolio.html');
    }

    $('#main').hide();
    $('#main').html(portfolioPage);
    $('#main').fadeIn(50);
    $('#duopolyBox').hide();
    $('#pggBox').hide();


    $('#duopolyBox').slideDown(800);
    $('#pggBox').slideDown(1000);

    // await GUI.showPage('html/portfolio.html');

    GUI.setModal('space');
    GUI.setModal('pgg');
    GUI.setModal('duopoly')

    $('#demoPGG').click(createPGGGame);
}
