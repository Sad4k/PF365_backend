#!/bin/bash

# Versión requerida de Node.js
REQUIRED_NODE_VERSION="20"

# Verificar si Node.js está instalado
if command -v node >/dev/null 2>&1; then
    # Obtener la versión actual de Node.js
    CURRENT_NODE_VERSION=$(node -v | sed 's/v//')

    # Verificar si la versión actual es igual o mayor que la requerida
    if [[ "$CURRENT_NODE_VERSION" == "$REQUIRED_NODE_VERSION"* ]]; then
        echo "Node.js versión $CURRENT_NODE_VERSION ya está instalada."
        exit 0
    else
        echo "Node.js versión $CURRENT_NODE_VERSION instalada. Se requiere la versión $REQUIRED_NODE_VERSION."
    fi
else
    echo "Node.js no está instalado."
fi

# Instalación o actualización de Node.js
echo "Instalando Node.js versión $REQUIRED_NODE_VERSION..."

# Descargar e instalar Node.js usando nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash

# Cargar nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Esto carga nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Esto carga nvm bash_completion

# Instalar la versión requerida de Node.js
nvm install $REQUIRED_NODE_VERSION

# Usar la versión instalada
nvm use $REQUIRED_NODE_VERSION

# Verificar la versión instalada
INSTALLED_NODE_VERSION=$(node -v)
echo "Node.js $INSTALLED_NODE_VERSION ha sido instalado."
