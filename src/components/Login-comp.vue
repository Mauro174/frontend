<template>
    <form>
        <h3>Iniciar sesión</h3>

        <div class="form-group">
            <label>Le damos la bienvenida a AlpacaFinance</label><br/><br/>
            
            <input type="email" class="form-control" placeholder="Correo electronico"/>
        </div>

         <div class="form-group">
            <input type="password" class="form-control" placeholder="Contraseña"/>
            <br/>
        </div>
    </form>
    <button class="btn btn-primary btn-block">Iniciar sesión</button>
    <div><br/><label>¿Aún no tienes una cuenta?</label></div>
    <br/>
    <button class="btn btn-primary btn-block">Registrarse</button>
    
</template>

<script>
    export default{
        name: 'MyLogin'
    }
</script>