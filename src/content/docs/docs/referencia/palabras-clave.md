---
title: Palabras clave
---

Las **palabras clave** son una de las dos formas (junto con las [expresiones regulares](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular)) de especificar a Vallax cómo buscar en el texto de los anuncios.

En esencia, una entrada de palabras clave es una lista de elementos de búsqueda separados por comas. Cada uno de estos elementos puede ser:

* **Una sola palabra**: Por ejemplo, si introduces `bicicleta`, el bot buscará anuncios que contengan esa palabra.

* **Varias palabras que deben aparecer**: Para esto, únelas con el símbolo `&`. Por ejemplo, `bicicleta & orbea` le indica a Vallax que el anuncio debe contener tanto "bicicleta" como "orbea" en el texto del anuncio para ser un resultado válido.

Al usar comas `,` para separar tus elementos, le estás diciendo a Vallax que busque anuncios que cumplan con al menos uno de ellos. Por ejemplo, `bicicleta & orbea, casco & mtb` encontrará anuncios que contengan "bicicleta" Y "orbea", o que contengan "casco" Y "mtb".
