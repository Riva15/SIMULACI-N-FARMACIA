-- Esquema para el sistema SIFHOS

-- 1. Tabla de usuarios
CREATE TABLE usuario (
    id_usuario SERIAL PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contrasena TEXT NOT NULL,
    rol_id INTEGER NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (rol_id) REFERENCES rol(id_rol)
);

-- 2. Tabla de roles (Farmacéutico, Administrador, Técnico, Médico)
CREATE TABLE rol (
    id_rol SERIAL PRIMARY KEY,
    nombre_rol VARCHAR(50) UNIQUE NOT NULL
);

-- 3. Tabla de categorías de medicamentos
CREATE TABLE categoria (
    id_categoria SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- 4. Tabla de medicamentos
CREATE TABLE medicamento (
    id_medicamento SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    id_categoria INTEGER REFERENCES categoria(id_categoria),
    unidad_medida VARCHAR(50) NOT NULL,
    tipo_controlado BOOLEAN DEFAULT FALSE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Tabla de lotes
CREATE TABLE lote (
    id_lote SERIAL PRIMARY KEY,
    codigo_lote VARCHAR(50) NOT NULL,
    id_medicamento INTEGER REFERENCES medicamento(id_medicamento),
    fecha_vencimiento DATE NOT NULL,
    cantidad_inicial INTEGER NOT NULL,
    cantidad_actual INTEGER NOT NULL
);

-- 6. Tabla de ingresos (compra o abastecimiento)
CREATE TABLE ingreso (
    id_ingreso SERIAL PRIMARY KEY,
    id_lote INTEGER REFERENCES lote(id_lote),
    fecha_ingreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cantidad INTEGER NOT NULL,
    usuario_id INTEGER REFERENCES usuario(id_usuario),
    origen VARCHAR(100)
);

-- 7. Tabla de egresos (dispensación)
CREATE TABLE egreso (
    id_egreso SERIAL PRIMARY KEY,
    id_lote INTEGER REFERENCES lote(id_lote),
    fecha_egreso TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cantidad INTEGER NOT NULL,
    usuario_id INTEGER REFERENCES usuario(id_usuario),
    destino_area VARCHAR(100),
    observaciones TEXT
);

-- 8. Tabla de alertas por stock crítico o vencimiento
CREATE TABLE alerta (
    id_alerta SERIAL PRIMARY KEY,
    id_lote INTEGER REFERENCES lote(id_lote),
    tipo_alerta VARCHAR(50) CHECK (tipo_alerta IN ('Stock', 'Vencimiento')),
    mensaje TEXT,
    nivel VARCHAR(20), -- Ej: ALTA, MEDIA, BAJA
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    leida BOOLEAN DEFAULT FALSE
);


-- Te dice con qué usuario y base de datos estás conectado, y el host/puerto

-- Muestra el usuario actual
SELECT CURRENT_USER;

-- Muestra el puerto en el que está escuchando el servidor
SHOW port;


INSERT INTO medicamento (id_medicamento, nombre, unidad_medida)
VALUES 
  (1, 'Paracetamol 500mg', 'tableta'),
  (2, 'Ibuprofeno 200mg', 'cápsula'),
  (3, 'Amoxicilina 250mg', 'jarabe');

-- Insertar roles
INSERT INTO rol (nombre_rol) VALUES
('Administrador'), ('Farmacéutico'), ('Médico'), ('Técnico');

-- Insertar usuario
INSERT INTO usuario (nombres, apellidos, correo, contrasena, rol_id)
VALUES
('Ana', 'Huanca', 'ana.huanca@hospital.gob.pe', '$2b$10$3Kn7POhHRHdknWkLBHRc1uxSOeQF0NNNqV0XFo4gYcdDEB4LkVZtK', 1);
-- La contraseña es "123456" encriptada con bcrypt

INSERT INTO usuario(nombres, apellidos, correo, contrasena, rol_id)
VALUES ('Juan', 'Pérez', 'admin@sifhos.com', 'admin123', 1);
