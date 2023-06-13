let list = {
    Resta : [{nombre: "La tranquera", des: "Restaurante La tranquera", img : "https://lh5.googleusercontent.com/p/AF1QipNvV3EfpuIw2JZ9KA6Vh2ckcZ9_CMdmfJyzX29A=w408-h544-k-no", ubic : "https://www.google.com/maps/place/La+Tranquera/@-16.5185474,-68.1330052,14z/data=!4m10!1m2!2m1!1srestaurante+La+tranquera+la+paz!3m6!1s0x915f2134e5e991e3:0x55873b0503cf0093!8m2!3d-16.5408904!4d-68.0894184!15sCh9yZXN0YXVyYW50ZSBMYSB0cmFucXVlcmEgbGEgcGF6WiEiH3Jlc3RhdXJhbnRlIGxhIHRyYW5xdWVyYSBsYSBwYXqSAQpyZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU50ZWxwWFoxVm5FQUXgAQA!16s%2Fg%2F11j7bzq11d?entry=ttu"},
    {nombre: "Hard Rock", des: "Restaurante Hard Rock", img : "https://lh5.googleusercontent.com/p/AF1QipOk7A7A4f1p-aeKqO0n3rOq8TQ6IjVZ9OI5T0x6=w408-h280-k-no", ubic : "https://www.google.com/maps/place/Hard+Rock+Cafe+La+Paz/@-16.5406829,-68.0864417,17z/data=!3m1!4b1!4m6!3m5!1s0x915f21eccf7bc425:0xe435d63f5148e602!8m2!3d-16.5406881!4d-68.0838614!16s%2Fg%2F11rqf8kdz2?entry=ttu"},
    {nombre: "Manca", des: "Restaurante Manca", img : "https://lh5.googleusercontent.com/p/AF1QipMd6VMChWJWyYXqZMGzNoCGmBFyiSOHJhNHBVFn=w408-h516-k-no", ubic : "https://www.google.com/maps/place/Manq'a/@-16.5252484,-68.1157679,15z/data=!4m10!1m2!2m1!1srestaurante+Manca+la+paz!3m6!1s0x915f212efcc81765:0x90dece0cdb54cb0!8m2!3d-16.5403975!4d-68.0845584!15sChhyZXN0YXVyYW50ZSBNYW5jYSBsYSBwYXpaGiIYcmVzdGF1cmFudGUgbWFuY2EgbGEgcGF6kgEKcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VObE5sbHROSGRCUlJBQuABAA!16s%2Fg%2F11s5c8zqyc?entry=ttu"},
    {nombre: "Paladrar", des: "Restaurante Paladrar", img : "https://lh5.googleusercontent.com/p/AF1QipO6vmwD3uqf4cqLQVUySg_KINKMDVW73255wYOS=w408-h305-k-no", ubic : "https://www.google.com/maps/place/PALADRAR/@-16.5428372,-68.116685,14z/data=!4m10!1m2!2m1!1srestaurante+Paladrar+la+paz!3m6!1s0x915f21eaf613ef9f:0x77c5dc5c7611d554!8m2!3d-16.5428372!4d-68.0785762!15sChtyZXN0YXVyYW50ZSBQYWxhZHJhciBsYSBwYXpaHSIbcmVzdGF1cmFudGUgcGFsYWRyYXIgbGEgcGF6kgERZmFtaWx5X3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11qpj95m8f?entry=ttu"},
    {nombre: "La Gaira", des: "Restaurante La Gaira", img : "https://lh5.googleusercontent.com/p/AF1QipOpw5rJNBNLfKtHmuh5bCj-CFWTNocl48eLUxsZ=w426-h240-k-no", ubic : "https://www.google.com/maps/place/La+Gaira/@-16.5408439,-68.0866095,17z/data=!3m1!4b1!4m6!3m5!1s0x915f21d3ed98d703:0xa02b8f88a5d71322!8m2!3d-16.5408491!4d-68.0840292!16s%2Fg%2F11q49jgqq5?entry=ttu"}],
    Pub : [{nombre: "Lico Sur", des: "Pub Lico Sur", img : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Yp24waRn5B7wjl_YDV9E2w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=170.01518&pitch=0&thumbfov=100", ubic : "https://www.google.com/maps/place/Lico+Sur/@-16.5299932,-68.1143155,15z/data=!4m10!1m2!2m1!1spub++Lico+Sur+la+paz!3m6!1s0x915f21bceadf2e85:0xcc62265de8bec20f!8m2!3d-16.525243!4d-68.1038595!15sChRwdWIgIExpY28gU3VyIGxhIHBhepIBA2JhcuABAA!16s%2Fg%2F11ll9g7v08?entry=ttu"},
    {nombre: "Moes Bar", des: "Pub Moes Bar", img : "https://lh5.googleusercontent.com/p/AF1QipN9UsHo4zaKjdfCnhMk7sUaXLjP9cbG5z3Nvgk=w408-h724-k-no", ubic : "https://www.google.com/maps/place/Moe's+Bar+LPZ/@-16.5299516,-68.1143584,15z/data=!4m10!1m2!2m1!1sMoes+Bar!3m6!1s0x915f21b97e5f4feb:0x89623ffdd8e66fea!8m2!3d-16.5412861!4d-68.0829007!15sCghNb2VzIEJhcloKIghtb2VzIGJhcpIBA2JhcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOU2N6aHhhV1ozRUFF4AEA!16s%2Fg%2F11ss3js4wp?entry=ttu"},
    {nombre: "Novo Cafe Lounge", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipOJLxTQ6jozd9g2rqtJRhTV-b3_f_6xkskvWhvu=w408-h458-k-no", ubic : "https://www.google.com/maps/place/Novo+Caf%C3%A9+Lounge/@-16.5409538,-68.0919863,17z/data=!3m1!4b1!4m6!3m5!1s0x915f2125e04ba1ed:0xea3b869d0be60d7c!8m2!3d-16.540959!4d-68.089406!16s%2Fg%2F11b7qb67zt?entry=ttu"},
    {nombre: "Cielo Bar", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipOl9C-aWP24AyLNM6zFulrLP0zd0NqxKDDQ3CD_=w408-h612-k-no", ubic : "https://www.google.com/maps/place/Cielo+Bar/@-16.5409538,-68.0919863,17z/data=!4m6!3m5!1s0x915f21eb5ec21e8f:0x9b6ca0d9bb5b7e5f!8m2!3d-16.5383532!4d-68.0819012!16s%2Fg%2F11svckr5h_?entry=ttu"}],
    Disco : [{nombre: "London Club", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipOmUmDUjyRdZqMAtZIB3efvwnFg_KYd5ApqPlAZ=w408-h283-k-no", ubic : "https://www.google.com/maps/place/London+Club/@-16.532989,-68.089536,17z/data=!3m1!4b1!4m6!3m5!1s0x915f213b101f2851:0x8df30b959625a0b7!8m2!3d-16.5329942!4d-68.0869557!16s%2Fg%2F11h1z2qm7v?entry=ttu"},
    {nombre: "Mar Azul", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipNCsHzckh124WyHjcppyHd9E2WsunO2A9LpvJEV=w408-h272-k-no", ubic : "https://www.google.com/maps/place/Mar+Azul+Discoteca/@-16.5402991,-68.1464321,13z/data=!4m10!1m2!2m1!1sdiscoteca+Mar+Azul+la+paz!3m6!1s0x915f2115c588582b:0x6b49184bf096497b!8m2!3d-16.5402991!4d-68.0702144!15sChlkaXNjb3RlY2EgTWFyIEF6dWwgbGEgcGF6kgEFZGlzY2_gAQA!16s%2Fg%2F11k4wr81dp?entry=ttu"},
    {nombre: "Wave", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipOuB-nvVEgnGhgEk4Z6zu89DTubJC8-JDI9j0Am=w408-h306-k-no", ubic : "https://www.google.com/maps/place/Wave+Club/@-16.5438751,-68.0800354,17z/data=!3m1!4b1!4m6!3m5!1s0x915f21089fc8f3e5:0xb3ddae8244ca56f7!8m2!3d-16.5438803!4d-68.0774551!16s%2Fg%2F11h4q447py?entry=ttu"},
    {nombre: "Zouk", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipP6iQGE4LKNOVz0MdRV9GnauRfiZOiZ534hkyLQ=w408-h306-k-no", ubic : "https://www.google.com/maps/place/Zouk+Boulevard/@-16.5438751,-68.0800354,17z/data=!4m6!3m5!1s0x915f21beba9c07db:0x10995c0f0d1de6b8!8m2!3d-16.5426524!4d-68.0771766!16s%2Fg%2F11s6jb5sbr?entry=ttu"},
    {nombre: "Moods Club La Paz", des: "", img : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3X6yuV0CrDnh_-_qKDY3IA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=322.91678&pitch=0&thumbfov=100", ubic : "https://www.google.com/maps/place/Moods+Club+La+Paz/@-16.5387849,-68.0777098,17z/data=!3m1!4b1!4m6!3m5!1s0x915f21f10f829e1f:0x5b5643b44a9bd31d!8m2!3d-16.5387901!4d-68.0751295!16s%2Fg%2F11t7n46dq1?entry=ttu"},
    {nombre: " Pacha", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipPzQ6wO8mspZSS9GvxeYwbp9Jg0YOtdPMAywEHv=w426-h240-k-no", ubic : "https://www.google.com/maps/place/PACHA/@-16.5423575,-68.0682911,17z/data=!3m1!4b1!4m6!3m5!1s0x915f215be83b52cd:0x6d656da6a2ad875e!8m2!3d-16.5423627!4d-68.0657108!16s%2Fg%2F11pyt6hs41?entry=ttu"},
    {nombre: "Fabula", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipNnMCXtwVi0MtbpAV8Vthr94uvi6xGiKG78_aeQ=w408-h306-k-no", ubic : "https://www.google.com/maps/place/F%C3%A1bula/@-16.5453672,-68.0615665,17z/data=!3m1!4b1!4m6!3m5!1s0x915f21bc7fde741d:0x8154b2adbe0603ff!8m2!3d-16.5453724!4d-68.0589862!16s%2Fg%2F11p_9ccg8y?entry=ttu"}],
    Karaoke : [{nombre: "Karaoke America", des: "", img : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=qat_2cyU5XwNWEMc_5fh9w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=80.83875&pitch=0&thumbfov=100", ubic : "https://www.google.com/maps/place/Karaoke+%22AMERICA%22/@-16.5427899,-68.0796986,17z/data=!3m1!4b1!4m6!3m5!1s0x915f21a64b4e342b:0x8752368a30faf6a4!8m2!3d-16.5427951!4d-68.0771183!16s%2Fg%2F11g5srdv_n?entry=ttu"},
    {nombre: "Karaoke en casa", des: "", img : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=OXOMFn_nIDjs5xcmmIBbSA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=281.4241&pitch=0&thumbfov=100", ubic : "https://www.google.com/maps/place/Karaoke+en+Casa/@-16.5431925,-68.0802419,18z/data=!4m10!1m2!2m1!1sKaraoke+en+casa+La+Paz!3m6!1s0x915f21c568a51743:0x133be481e5f1eb0b!8m2!3d-16.5447005!4d-68.0770243!15sChZLYXJhb2tlIGVuIGNhc2EgTGEgUGF6kgEFc3RvcmXgAQA!16s%2Fg%2F11f9vk0jmg?entry=ttu"},
    {nombre: "Moods Club", des: "", img : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3X6yuV0CrDnh_-_qKDY3IA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=322.91678&pitch=0&thumbfov=100", ubic : "https://www.google.com/maps/place/Moods+Club+La+Paz/@-16.5387901,-68.0775113,18z/data=!4m10!1m2!2m1!1sKaraoke+Moods+Club+La+Paz!3m6!1s0x915f21f10f829e1f:0x5b5643b44a9bd31d!8m2!3d-16.5387901!4d-68.0751295!15sChlLYXJhb2tlIE1vb2RzIENsdWIgTGEgUGF6kgEKbmlnaHRfY2x1YuABAA!16s%2Fg%2F11t7n46dq1?entry=ttu"}],
    Cafe : [{nombre: "Rosee Coffe", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipNWAtFJxxVjubxx8P9hRMip7bR3wrkksYrMJqcE=w408-h544-k-no", ubic : "https://www.google.com/maps/place/ROSSE+COFFEE/@-16.5387772,-68.0813871,16z/data=!4m10!1m2!2m1!1scafe+Rosee+Coffe+La+Paz!3m6!1s0x915f2147d83e99af:0xcb476f421d76f31!8m2!3d-16.5428156!4d-68.0798824!15sChdjYWZlIFJvc2VlIENvZmZlIExhIFBheloZIhdjYWZlIHJvc2VlIGNvZmZlIGxhIHBhepIBC2NvZmZlZV9zaG9wmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5vYURWeVVuRm5SUkFC4AEA!16s%2Fg%2F11rcjdvzv_?entry=ttu"},
    {nombre: "Cafeina Specialty Coffe Shop", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipOiNzH3a9N5ZxZO42lMjWHcNexEtPhsUYrgR6-9=w408-h306-k-no", ubic : "https://www.google.com/maps/place/Cafe%C3%ADna+Specialty+Coffee+Shop/@-16.5403968,-68.0811743,17z/data=!3m1!4b1!4m6!3m5!1s0x915f212ef1700239:0x442904875b9a1036!8m2!3d-16.540402!4d-68.078594!16s%2Fg%2F11gslxk0zy?entry=ttu"},
    {nombre: "Botanica", des: "", img : "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=af-eT6LUCxRVmPml4VaOHw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=235.40659&pitch=0&thumbfov=100", ubic : "https://www.google.com/maps/place/Botanica.LaPaz/@-16.5403495,-68.0992472,14z/data=!4m10!1m2!2m1!1scafe+Botanica+La+Paz!3m6!1s0x915f21836c7b9e15:0xd754bfdb4a8f0f07!8m2!3d-16.5404659!4d-68.0840141!15sChRjYWZlIEJvdGFuaWNhIExhIFBheloWIhRjYWZlIGJvdGFuaWNhIGxhIHBhepIBCnJlc3RhdXJhbnTgAQA!16s%2Fg%2F11rkmv45mn?entry=ttu"}],
    Cultural : [{}],
    Lugares : [{nombre: "Valle de la luna", des: "", img : "https://lh5.googleusercontent.com/p/AF1QipNx1DKyba3entVEKKpF1rnQDvMUkJsn64FY5EyC=w408-h306-k-no", ubic : "https://www.google.com/maps/place/Valle+de+la+Luna/@-16.5673591,-68.0964884,17z/data=!3m1!4b1!4m6!3m5!1s0x915f26d859646023:0xe5ce84af268e7da5!8m2!3d-16.5673643!4d-68.0939081!16s%2Fm%2F05c4jp4?entry=ttu"}]
}


let title = document.getElementById('titles')
    renders = document.getElementById('renders');


    const render = (n,d,i,u) => {
        return `<div class="card" style="width: 300px;">
        <img src="${i}" class="card-img-top" alt="..."  height="300px" width="300px">
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
            renders.innerHTML = renders.innerHTML + render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const pub = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Pubs"
        list.Pub.forEach(x => {
            renders.innerHTML = renders.innerHTML + render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const dis = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Discotecas"
        list.Disco.forEach(x => {
            renders.innerHTML = renders.innerHTML + render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const kara = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Karaoke"
        list.Karaoke.forEach(x => {
            renders.innerHTML = renders.innerHTML + render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const caf = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Cafes"
        list.Cafe.forEach(x => {
            renders.innerHTML = renders.innerHTML + render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const cul = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Cultural"
        list.Cultural.forEach(x => {
            renders.innerHTML = renders.innerHTML + render(x.nombre, x.des, x.img, x.ubic)
        });
    }

    const lug = () => {
        title.innerHTML = null;
        renders.innerHTML = null;
        title.innerHTML = "Lugares Turisticos"
        list.Lugares.forEach(x => {
            renders.innerHTML = renders.innerHTML + render(x.nombre, x.des, x.img, x.ubic)
        });
    }