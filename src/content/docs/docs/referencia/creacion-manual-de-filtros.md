---
title: Creacion manual de filtros
---

El tercer método para crear filtros que mencionamos en la sección "Primeros Pasos". Es el único que permite especificar directamente una [expresión regular](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular) (regex) y es un comando estilo CLI. Esto facilita la creación de búsquedas mucho más complejas, a diferencia de los filtros por lenguaje natural (donde la IA genera el regex por ti) o por menú (que solo usa palabras clave).

:::tip[Premium]
Esta funcionalidad requiere el plan premium
:::

## Formato del comando
El comando es `/cf` (de **c**rear **f**iltro) seguido de una lista de flags.
Cada flag empieza con `-` (forma corta) o `--` (forma larga), van separados por espacios y pueden ir en cualquier orden.

La omisión de cualquier flag hará que se use su valor por defecto.

## flags
| Flag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Significado                                                                                     | Por defecto | Ejemplo                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------- |
| `-h`<br>`--help`       | Muestra ayuda sobre el comando.                                                                                                                 | —           | `/cf -h`                           |
| `-p`<br>`--platforms`  | Inicial/es de las plataforma/s donde buscar. <br> Puedes combinarlas sin importar el orden. Por ejemplo, `wv` activa Wallapop (w) y Vinted (v). | `wv`        | `/cf -p v` (solo activa vinted)    |
| `-lp`<br>`--low_price` | Precio mínimo. <br> Solo se permiten **números enteros positivos**.                                                                             | `0`         | `/cf -lp 20`                       |
| `-mp`<br>`--max_price` | Precio máximo. <br> También debe ser un **entero positivo**.                                                                                    | sin límite  | `/cf -mp 80`                       |
| `-r`<br>`--regex`      | Expresión regular                                                                                                                               | —           | `/cf -r .*ps5.*nuevo.*`            |
| `-w`<br>`--words`      | Palabras clave, separadas por comas. Usa `&` para agrupar.                                                                                      | —           | `/cf -w zapatillas nike & air max` |

:::note
Es obligatorio definir `--regex (-r)` o `--words (-w)`, al menos una de las dos.
:::

## Ejemplos
* Buscar en Wallapop y Vinted artículos entre 10 y 100 € que coincidan con una regex:

  ```/cf -p wv -lp 10 -mp 100 -r .*chaqueta de cuero.*```

* Buscar solo en Vinted artículos con palabras clave específicas sin limitar precio:

  ```/cf -p v -w zapatillas nike & air max```
