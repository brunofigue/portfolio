import React from 'react';

const projects = [
  {
    title: 'Runing - Trails',
    description: 'Proyecto para entrega con js. fecha 20/10/24.',
    image: 'https://i0.wp.com/carrerasdemontana.com/wp-content/uploads/2022/04/trail-las-palomas-2022-trail-running-andalucia-1.jpg?resize=222%2C180&ssl=1',
    link: 'https://github.com/brunofigue/entrega-con-js.git',
  },
  {
    title: 'Proyecto 2',
    description: 'Proyecto profesional en grupo, con división de tareas. Fecha 10/12/24',
    image: 'https://rcinspecciones.com/gallery_gen/9de942a5c7b3b7bfab377e490a9a3260_fit.jpg',
    link: 'https://github.com/carlos8788/PRACT_PROF.git',
  },
  {
    title: 'Proyecto 3',
    description: 'Una breve descripción de mi tercer proyecto.',
    image: 'https://via.placeholder.com/400x250',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects py-5 bg-dark text-light">
      <div className="container text-center">
        <h3 className="mb-4">Mis Proyectos:</h3>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
