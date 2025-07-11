---
title: Crear y Comprobar RegEx
---

Si bien aprender a usar RegEx puede ser útil, no es un requisito para usar Vallax. Aquí te dejamos una forma sencilla de crear y comprobar tus expresiones regulares que no requiere saber cómo funcionan.

### 1. Creación
Utiliza herramientas como **ChatGPT**, **Gemini** o **DeepSeek**. Es fundamental especificar que la RegEx es para **Rust**, ya que las implementaciones varían.

Al preguntarle a la IA, el límite es tu imaginación. Puedes ser tan vago o tan específico como quieras:

* **Siendo vago y abstracto:**

    "Dame una RegEx para **Rust** que busque en descripciones de artículos de segunda mano y encuentre coincidencias con bicicletas Specialized u Orbea."

    *(Aquí, la IA interpretará qué palabras clave o patrones usar para esas marcas.)*

* **O tan específico como quieras:**

    "Dame una RegEx para **Rust** que haga match cuando en la descripción aparezca 'Specialized' o 'Specialiced' (por si hay faltas) y también 'bicicleta' o 'bici'. Asegúrate de que no distinga entre mayúsculas y minúsculas."

    *(En este caso, tú ya has definido las palabras exactas y el formato.)*

### 2. Comprobación
Una vez tengas la RegEx, ve a **[Regex101.com](https://regex101.com/)** para comprobar su funcionamiento.

:::caution
En el menú lateral izquierdo, donde pone "FLAVOR", selecciona **Rust**. Esto asegura que se evalúe exactamente igual que lo hace Vallax.
:::

1.  **Pega tu RegEx:** En el campo "REGULAR EXPRESSION".
2.  **Añade ejemplos:** Introduce descripciones de anuncios de segunda mano. Incluye casos que deberían coincidir y otros que no.

3.  **Verifica:** La plataforma te mostrará las coincidencias. Si no se comporta como esperas, ajusta la RegEx con ayuda de la IA, mencionando siempre que es para **Rust**.

> Siempre es recomendable comprobar tus RegEx en Regex101.com (o páginas similares) antes de enviárselas a Vallax.
