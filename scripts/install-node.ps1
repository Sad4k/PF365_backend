# Versión requerida de Node.js
$requiredNodeVersion = "20"

# Función para obtener la versión actual de Node.js
function Get-NodeVersion {
    if (Test-Path "$env:ProgramFiles\nodejs\node.exe") {
        & "$env:ProgramFiles\nodejs\node.exe" --version | ForEach-Object { $_.TrimStart('v') }
    } else {
        return $null
    }
}

# Verificar la versión actual de Node.js
$currentNodeVersion = Get-NodeVersion

if ($currentNodeVersion) {
    if ($currentNodeVersion -like "$requiredNodeVersion*") {
        Write-Output "Node.js versión $currentNodeVersion ya está instalada."
        exit
    } else {
        Write-Output "Node.js versión $currentNodeVersion instalada. Se requiere la versión $requiredNodeVersion."
    }
} else {
    Write-Output "Node.js no está instalado."
}

# Instalación o actualización de Node.js
Write-Output "Instalando Node.js versión $requiredNodeVersion..."

# Descargar el instalador de Node.js
$installerUrl = "https://nodejs.org/dist/v$requiredNodeVersion.0/node-v$requiredNodeVersion.0-x64.msi"
$installerPath = "$env:TEMP\nodejs-installer.msi"

Invoke-WebRequest -Uri $installerUrl -OutFile $installerPath

# Ejecutar el instalador
Start-Process msiexec.exe -ArgumentList "/i $installerPath /quiet" -Wait

# Verificar la versión instalada
$currentNodeVersion = Get-NodeVersion
Write-Output "Node.js $currentNodeVersion ha sido instalado."
