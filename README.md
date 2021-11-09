

#1 clonar el repositorio desde https://github.com/hugotata78/ch-global-system

#2 Una vez clonado el repo y dentro del directorio donde se ubica el mismo, ejecutar el comando
yarn install para instalar las dependencias

#3 Luego de instalar las dependencias, ejecutar el comando yarn start para iniciar la aplicación

#4 Caracteristicas:

*Productos:
Al hacer click en la imagen de un producto de la lista, el producto seleccionado se agrega al carrito de compras, en caso de que este producto ya se encuentre dentro del carrito, al hacer click en dicah imagen hace que aumente en uno la cantidad del producto seleccionado.

*Carrito de compras:

el carrito de compras inicialmente se halla oculto, para desplegar el mismo se debe hacer click en el icono ubicado en la esquina superior izquierda de la aplicación. Esto hace que se despliegue un componente, el cual si el carrito se encuentra vacio, muestra un  parrafo indicando dicha circunstancia, en caso contrario se exhibe la lista de productos agregados al carrito, detallando la cantidad de cada producto seleccionado, el precio unitario y el precio total por cada itme, además dicha lista cuenta con dos botones para aumentar o disminuir la cantidad en uno de un producto en específico, si en caso de que uno de los productos solo tiene la cantida equivalente a 1, al hacer click en el boton para disminuir la cantidad, esto elimina el producto de la lista. También cada item cuenta con un tercer botón para poder eliminar un producto de la lista sin importar la cantidad de elementos con que cuenta dicho produto.
Al final de la lista se exhibe un parrafo indicando el precio total de la lista de productos.

*Medios de pago:
Debajo de la lista de productos, se despliega una componente con una lista de imagenes con las distintas opciones de pago que cuenta el cliente para pagar los productos adquiridos, cada una de estas imágnes está relacionada a un input tipo 'radio', el cual se halla oculto. Al hacer click sobre la imagen del medio de pago que se desea utilizar, se ejecuta una función que hace que se tome el valor del input, el cual se agrega a un estado que posteriormente será utilizado al momento de pagar los productos.

*Botón de pago:
En el margen inferior derecho, se ubica un boton para efectuar al pago de los productos adquiridos, el cual cuenta con dos validaciones, la primera verifica si se seleccionó un medio de pago, la segunda que el carrito cuente con algún producto agregado, en caso de que no se haya seleccionado ningún medio de pago o que el carrito se encuentre vacio, se despliega una alerta indicando al cliente dichas circunstancias, en caso de pasar ambas validaciones se despliega un modal, indicando el medio de pago seleccionado, contando dicho modal con un boton para aceptar y realizar el pago, otro para cancelar y otro botón para cerrar el modal, en este último caso también se cancela el pago.

# link deploy: https://columbus-store.surge.sh/

