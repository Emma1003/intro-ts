import{calcularIVA2,producto} from"./05-desestructura-funciones";

const carrito:producto[]=[   'carrito'
     {
        desc:'Telelefono1',
        precio:100
     },
     {
        desc:'Telelefono2',
        precio:1000
     },
     {
        desc:'Telelefono3',
        precio:10000
     }

]
const [total,iva]=calcularIVA2(carrito);
console.log('total:  ${total}');
console.log('total:  ${iva}');




