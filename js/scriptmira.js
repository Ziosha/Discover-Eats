let list = {
    Resta : [{nombre: "Popular", des: "Restaurante Popular", img : "", ubic : ""}],
    Pub : [{nombre: "", des: "", img : "", ubic : ""}],
    Disco : [{nombre: "", des: "", img : "", ubic : ""}],
    Karaoke : [{nombre: "", des: "", img : "", ubic : ""}],
    Cafe : [{nombre: "", des: "", img : "", ubic : ""}],
    Cultural : [{nombre: "", des: "", img : "", ubic : ""}],
    Lugares : [{nombre: "", des: "", img : "", ubic : ""}]
}


let title = document.getElementById('titles')
    renders = document.getElementById('renders');


    const render = (n,d,i,u) => {
        return `<div class="card" style="width: 18rem;">
        <img src="${i}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${n}</h5>
        <p class="card-text">${d}</p>
        <a href="${u}" class="btn btn-primary">Ver Direccion</a>
        </div>
    </div>`
    }




    const index = () => {
        window.location.href = "/index.html"
    }

    const res = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Restaurantes"
        list.Resta.forEach(x => {
            renders.innerHTML = render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const pub = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Pubs"
        list.Pub.forEach(x => {
            renders.innerHTML = render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const dis = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Discotecas"
        list.Disco.forEach(x => {
            renders.innerHTML = render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const kara = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Karaoke"
        list.Karaoke.forEach(x => {
            renders.innerHTML = render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const caf = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Cafes"
        list.Cafe.forEach(x => {
            renders.innerHTML = render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const cul = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Cultural"
        list.Cultural.forEach(x => {
            renders.innerHTML = render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const lug = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Lugares Turisticos"
        list.Lugares.forEach(x => {
            renders.innerHTML = render(x.nombre, x.des, x.img, x.ubic)
        });
    }