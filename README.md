
# FashionHub Tests de Ricardo Castro

## Requisitos
- Node.js v14+ y npm
- Cypress
- Docker (para ejecutar la aplicación localmente)

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/Padgel/fashionhub-tests.git
   cd fashionhub-tests
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración del Contenedor Docker
Antes de correr las pruebas de forma local, asegúrate de tener Docker instalado y ejecuta los siguientes comandos para levantar la aplicación:
1. Descarga la imagen de Docker:
   ```bash
   docker pull pocketaces2/fashionhub-demo-app
   ```
2. Ejecuta el contenedor:
   ```bash
   docker run -p 4000:4000 pocketaces2/fashionhub-demo-app:latest
   ```
   Esto hará que la aplicación esté disponible en `http://localhost:4000/fashionhub/`.

## Ejecución de Pruebas
Asegúrate de que la aplicación esté corriendo antes de ejecutar las pruebas. Aquí tienes cómo hacerlo para cada entorno:

- **Local**: Verifica que la aplicación esté accesible en `http://localhost:4000/fashionhub/`.
- **Staging**: Asegúrate de que la URL de staging esté disponible.
- **Producción**: Comprueba que la URL `https://pocketaces2.github.io/fashionhub/` esté en línea.

Para ejecutar las pruebas utilizar el siguiente comando:
"npx cypress run"

## Resultados de las Pruebas

Si el Test Case 4 (listar los PRs de GitHub) se ejecuta correctamente, se generará un archivo `pr_list.csv` en la siguiente ruta:
- `cypress/e2e/output/pr_list.csv`

Este archivo contendrá un listado de los PRs abiertos en el repositorio de ejemplo.

## Estructura de Archivos
- `cypress/e2e/tests/`: Contiene los scripts de pruebas automatizadas para cada caso de uso.
- `cypress.config.js`: Configuración de Cypress, incluyendo la configuración de entornos.
- `cypress/e2e/output/`: Carpeta donde se guarda el archivo `pr_list.csv` generado con los resultados del Test Case 4.

## Notas para Windows
Para que las variables de entorno funcionen correctamente en Windows, utilizamos la librería `cross-env`. Esto nos asegura que los scripts se ejecuten de forma consistente sin importar el sistema operativo.
