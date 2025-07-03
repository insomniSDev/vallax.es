---
lang: es-ES
title: Filtros
---

Los filtros definen las condiciones bajo las cuales Vallax debe notificarte nuevos anuncios.

Se evalua cada anuncio nuevo con cada uno de tus filtros **activos**, cuando un anuncio cumple **todas** las condiciones impuestas por un filtro, te lo notifica.

## Proceso Evaluación
Proceso que sigue Vallax para decidir si un anuncio cumple con un filtro.

Cada parámetro (plataforma, precio, palabras clave, ...) funciona como una condicion que el anuncio debe cumplir: si falla en una, se descarta; si las cumple todas, Vallax te lo notifica.

1. **Plataforma**: El anuncio debe pertenecer a una plataforma activada en el filtro.
    - Si el filtro no incluye la plataforma del anuncio (`Wallapop`, `Vinted`, ...), se descarta directamente.

2. **Precio**: Se compara el precio del anuncio con los valores definidos en el filtro.
    - Si se define precio minimo, el precio del anuncio debe ser **mayor o igual**.
    - Si se define precio maximo, el precio del anuncio debe ser **menor o igual**.
    - Si no se cumplen estas condiciones, se descarta.

4. **Categoría**: Si el filtro incluye una categoría, se aplica una validación adicional.
    - En **Wallapop**, se usa el ID interno de wallapop.
    - En **Vinted**, se hace una coincidencia textual.
    > ⚠️ Si la categoría coincide y no se ha definido ni palabras clave ni regex, el anuncio se acepta automáticamente.

3. **Texto**: Se analizan coincidencias textuales en el anuncio (el texto que se analiza varía según la plataforma, pero generalmente incluye el título y la descripción del anuncio).

    Se deben dar **una de estas dos condiciones**:
    - **Palabras clave**: Se comprueba en base a las reglas de las [palabras clave](/docs/referencia/palabras-clave).
    - **Regex**: si la [expresion regular](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular) se cumple.
