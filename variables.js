// Local arrays
var pointsArray = [];
var normalsArray = [];
var texCoordsArray = [];

// Model view parameters
var eye;
var at = vec3(0.0, 26.0, 0.0);
var up = vec3(0.0, 1.0, 0.0);
var theta = 30.0 * Math.PI / 180.0;
var phi = 30.0 * Math.PI / 180.0;
var dr = 5.0 * Math.PI / 180.0;
var zoom = 180.0;

// Perspective parameters
var aspect;
var near = 20.0;
var far = 800.0;
var fovy = 30.0;

// Matrices
var projectionMatrix;
var modelViewMatrix;
var projectionMatrixLoc;
var modelViewMatrixLoc;
var nMatrix, nMatrixLoc;

// Light parameters
var lightPosition = vec4(1.0, 0.0, 1.0, 0.0);
var lightAmbient = vec4(1.0, 1.0, 1.0, 1.0);
var lightDiffuse = vec4(1.0, 1.0, 1.0, 1.0);
var lightSpecular = vec4(1.0, 1.0, 1.0, 1.0);

// Background trigger
var uBackLoc;

// Texture
var textures = new Map();
// Models bounds in pointsArray
var boundsMap = new Map();

// Fixed function for storing background 
function background(){
    pointsArray.push(vec4(-1.0, -1.0, 0.99, 1.0));
    normalsArray.push(vec4(0.0, 0.0, 1.0));
    texCoordsArray.push(vec2(1.0 ,1.0));

    pointsArray.push(vec4(1.0, -1.0, 0.99, 1.0));
    normalsArray.push(vec4(0.0, 0.0, 1.0));
    texCoordsArray.push(vec2(0.0 ,1.0));    

    pointsArray.push(vec4(1.0, 1.0, 0.99, 1.0));
    normalsArray.push(vec4(0.0, 0.0, 1.0));
    texCoordsArray.push(vec2(0.0 ,0.0));

    pointsArray.push(vec4(-1.0, 1.0, 0.99, 1.0));
    normalsArray.push(vec4(0.0, 0.0, 1.0));
    texCoordsArray.push(vec2(1.0 , 0.0));
}

// All drawable elements
var elements = new Map([
    ['falange_c',   falange_c_triangles],
    ['falangina_c', falangina_c_triangles],
    ['falangina_t', falangina_t_triangles],
    ['perno_p',     perno_p_triangles],
    ['perno_m',     perno_m_triangles],
    ['perno_f',     perno_f_triangles],
    ['palmo_h',     palmo_h_triangles],
    ['palmo_r',     palmo_r_triangles],
    ['pollice',     pollice_triangles],
    ['base',        base_triangles],
]);

// Material structure
function createMaterial(ambient, diffuse, specular, shininess) {
    var material = {
        ambient: ambient,
        diffuse: diffuse,
        specular: specular,
        shininess: shininess
    };
    return material;
}

// All materials by type
var materials = new Map([
    ['aluminium',         createMaterial(vec4(0.3, 0.3, 0.3, 1.0), vec4(0.8, 0.8, 0.8, 1.0), vec4(0.4, 0.4, 0.4, 1.0), 30)],
    ['base',              createMaterial(vec4(1.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0), 10)],
    ['blue_plastic',      createMaterial(vec4(0.15, 0.15, 0.15, 1.0), vec4(0.55, 0.55, 0.55, 1.0), vec4(0.7, 0.7, 0.7, 1.0), 32)],
    ['carbon_fiber',      createMaterial(vec4(0.15, 0.15, 0.15, 1.0), vec4(0.7, 0.7, 0.7, 1.0), vec4(0.8, 0.8, 0.8, 1.0), 90)],
    ['carbon_fiber_palm', createMaterial(vec4(0.15, 0.15, 0.15, 1.0), vec4(0.7, 0.7, 0.7, 1.0), vec4(0.8, 0.8, 0.8, 1.0), 90)],
    ['ergal',             createMaterial(vec4(0.3, 0.3, 0.3, 1.0), vec4(0.5, 0.5, 0.5, 1.0), vec4(0.8, 0.8, 0.8, 1.0), 78)],
    ['gold',              createMaterial(vec4(0.4, 0.4, 0.4, 1.0), vec4(0.7, 0.7, 0.7, 1.0), vec4(0.8, 0.8, 0.8, 1.0), 200)],
    ['grey_plastic',      createMaterial(vec4(0.15, 0.15, 0.15, 1.0), vec4(0.55, 0.55, 0.55, 1.0), vec4(0.7, 0.7, 0.7, 1.0), 32)],
    ['steel',             createMaterial(vec4(0.3, 0.3, 0.3, 1.0), vec4(0.8, 0.8, 0.8, 1.0), vec4(1.0, 1.0, 1.0, 1.0), 28)],
    ['white_plastic',     createMaterial(vec4(0.5, 0.5, 0.5, 1.0), vec4(0.55, 0.55, 0.55, 1.0), vec4(0.7, 0.7, 0.7, 1.0), 32)],
]);

// Material of each piece
var materials_map = new Map([
    ['base',        'base'],
    ['pollice',     'carbon_fiber'],
    ['perno_p',     'ergal'],
    ['perno_m',     'ergal'],
    ['perno_f',     'ergal'],
    ['palmo_r',     'carbon_fiber_palm'],
    ['palmo_h',     'carbon_fiber_palm'],
    ['falangina_t', 'white_plastic'],
    ['falangina_c', 'white_plastic'],
    ['falange_c',   'white_plastic']
])

// Scaling of some pieces
var scalings = new Map([
    ['falange_c', 1],
    ['falangina_c', 1]
])