class Nodo:
    def __init__(self, dato):
        self.dato = dato
        self.izquierda = None
        self.derecha = None

#from nodos import Nodo
class Arbol:
    def __init__(self, dato):
        self.raiz = Nodo(dato)
    
    def __agregar_recursivo(self, nodo, dato):
        if dato < nodo.dato:
            if nodo.izquierda is None:
                nodo.izquierda = Nodo(dato)
            else:
                self.__agregar_recursivo(nodo.izquierda, dato)
        else:
            if nodo.derecha is None:
                nodo.derecha = Nodo(dato)
            else:
                self.__agregar_recursivo(nodo.derecha, dato)

    def __inorden(self, nodo):
        if nodo is not None:
            self.__inorden(nodo.izquierda)
            print(nodo.dato, end=", ")
            self.__inorden(nodo.derecha)

    def __preorden(self, nodo):
        if nodo is not None:
            print(nodo.dato, end=", ")
            self.__inorden(nodo.izquierda)
            self.__inorden(nodo.derecha)

    def __postorden(self, nodo):
        if nodo is not None:
            self.__inorden(nodo.izquierda)
            self.__inorden(nodo.derecha)
            print(nodo.dato, end=", ")

    def __buscar(self, nodo, busqueda):
        if nodo is None:
            return None
        if nodo.dato == busqueda:
            return None
        if busqueda < nodo.dato:
            return self.__buscar(nodo.izquiera, busqueda)
        else:
            return self.__buscar(nodo.derecha, busqueda)
        
    def agregar(self, dato):
        self.__agregar_recursivo(self.raiz, dato)
    def inorden(self):
        print("Imprimiendo el Arbol Inorden: ")
        self.__inorden(self.raiz)
        print("")
    def preorden(self):
        print("Imprimiendo el Arbol Preorden: ")
        self.__preorden(self.raiz)
        print("")
    def postorden(self):
        print("Imprimiendo el Arbol Postorden: ")
        self.__postorden(self.raiz)
        print("")
    def buscar(self, busqueda):
        return self.__buscar(self.raiz, busqueda)
    
#from arbol import Arbol;
arbol = Arbol(6)
arbol.agregar(1)
arbol.agregar(2)
arbol.agregar(13)
arbol.agregar(7)
arbol.agregar(5)
arbol.agregar(4)

arbol.inorden()
arbol.preorden()
arbol.postorden()