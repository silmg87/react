import React from 'react';
import './App.css';
import {
  Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Button
} from "@nextui-org/react";


function App() {

  return (
  // <Card>
  //   <CardBody>
  //     <h2>Iniciar sesión</h2>
  //     <form className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
  //       <Input size="md" type="email" label="Email" />
  //       <Input size="md" type="password" label="Password" />
  //       <Button color="default" radius="lg" size="md">
  //         Iniciar sesión
  //       </Button>  
  //     </form> 
  //     <p>¿Aún no estas registrado?. <Link href="#">Registrarte.</Link></p>
  //   </CardBody>  
  // </Card>  
  <Card className="max-w-[400px]">
  <CardHeader>
    <h2 className="">Iniciar sesión</h2>
  </CardHeader>
  <CardBody>
  <form className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
       <Input size="md" type="email" label="Email" />
       <Input size="md" type="password" label="Password" />
       <Button color="default" radius="lg" size="md">
         Iniciar sesión
       </Button>  
     </form> 
  </CardBody>
  
  <CardFooter>
    <Link
      isExternal
      href="https://github.com/nextui-org/nextui"
    >
      ¿Aún no estas registrado?. Registrarte.
    </Link>
  </CardFooter>
</Card>
  );
}

export default App
