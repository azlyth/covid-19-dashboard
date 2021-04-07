import './About.css';

function About(){
  return (
    <section className='aboutSection' id='aboutSection'>
      <div className='aboutContainer'>
        <h6>About This Project</h6>
        <p>This information is from the <a target="_blank" rel="noopener noreferrer" href="https://hhinternet.blob.core.windows.net/wait-times/testing-wait-times.pdf">dashboard</a> created by NYC Health and Hospitals. <a target="_blank" rel="noopener noreferrer" href="https://github.com/astoria-tech/nyc-covid19-testing-wait-times">Access an archive</a> of the wait time data, and <a target="_blank" rel="noopener noreferrer" href="https://datastudio.google.com/u/0/reporting/1506fb15-ab88-4226-a251-59a114affd9c/page/EdRsB">explore the data</a> with the data visualization dashboard.</p>
        <p>A team of <a target="_blank" rel="noopener noreferrer" href="http://astoria.digital/">Astoria Digital</a> volunteers created this site to create an accessible version of this data, with the option to access an archive the data and explore the visualizations. You can contribute to the <a target="_blank" rel="noopener noreferrer" href="http://github.com/astoria-tech/covid-19-dashboard">github</a> of this project and <a target="_blank" rel="noopener noreferrer" href="mailto:team@astoria.digital">contact us</a> with questions.</p>
      </div>
    </section>
  );
}

export default About;