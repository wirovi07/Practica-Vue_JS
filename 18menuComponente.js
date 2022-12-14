_app.component('menu-component', {
    template: `<nav class="navbar navbar-dark bg-primary">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                        <a class="nav-link disabled">{{usuario}}</a>
                        </div>
                    </div>
                    </div>
                </nav> 
                <input type="text" v-model="usuario">`,


    props:{
        usuario: String
    },
    data(){
        return{
            miUsuario: this.usuario
        }
    }
})