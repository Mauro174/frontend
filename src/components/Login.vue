<template>
    <form>

        <h3>Te damos la bienvenida a AlpaFinance</h3>

        <div class="form-group">
            <input type="email" class="form-control" placeholder="Correo electrónico"/>
            <input type="password" class="form-control" placeholder="Contraseña"/>
            <label>¿Has olvidado tu contraseña?</label>
        </div>

        <br/>

        <div id="wrapper">
            <button class="btn btn-primary btn-block">Iniciar Sesión</button>
        </div>

        <br/>

        <div class="form-group">
            <label>------------------¿Aún no tienes una cuenta?------------------</label>
        </div>

        <br/>

        <div id="wrapper">
            <button class="btn btn-primary btn-block">Registrate</button>
        </div>       
         

    </form>
    
</template>

<script>
    
    export default {
        name: 'MyLogin'
    }
</script>