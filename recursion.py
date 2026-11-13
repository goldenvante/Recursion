def merge_sort(lista):

    # Caso base
    if len(lista) <= 1:
        return lista

    # Dividir la lista en dos mitades
    mitad = len(lista) // 2

    izquierda = merge_sort(lista[:mitad])
    derecha = merge_sort(lista[mitad:])

    # Fusionar las dos mitades ordenadas
    return fusionar(izquierda, derecha)


def fusionar(izquierda, derecha):

    resultado = []

    i = 0
    j = 0

    # Comparar elementos de ambas listas
    while i < len(izquierda) and j < len(derecha):

        if izquierda[i] < derecha[j]:
            resultado.append(izquierda[i])
            i += 1

        else:
            resultado.append(derecha[j])
            j += 1

    # Agregar elementos restantes
    resultado += izquierda[i:]
    resultado += derecha[j:]

    return resultado


numeros = [8, 3, 5, 1, 9, 2, 6, 4]

print("Original:", numeros)
print("Ordenado:", merge_sort(numeros))