// Important values ------------------------------------------
var palmoL = 9.5;
var palmoR = 17.0;
var falangeH = 7.0;
var pernoToFalange = 2.8817;
var falanginaCToT = 0.25;
var palmoToPernoH = 31.469;
var palmoToPernoR = 22.869;
var fingerDispZ = 0.152;
var thumbBaseDispX = -13;
var thumbBaseDispY = 11.1;
var thumbDispX = -5.959;
var thumbDispY = 1.74;
var thumbAngZ = -50;

/*
Useful measures:
  - Falange axel-axel distance = 12.44
  - Base floor-ball distance = 12.50
  - Ball radius = 4.00
  - Palm height = 28.60
  - Thumb inclination angle = 50 deg
  - Thumb height = 11.0
  - Perno bottom to rotation center = 4.119
  - Palmo-perno height = 31.469
  - Thumb-palm height = 11.1
  - Thumb-palm width = 13.0
  - Thumb-phalanx width = 5.959
  - Thumb-phalanx width height = 1.74
  - Palm-perno horizontal displacement = 0.152
  - Perno-center phalanx height = 2.8817
  - Falange-Falangina displacement = 0.25
*/

// Falange ---------------------------------------------------

var falange_c = [
	vec4(-2.25, 0.0, -2.25, 1.0),
	vec4(-2.25, 0.0, 2.25, 1.0),
	vec4(-2.25, 7.0, -2.25, 1.0),
	vec4(-2.25, 7.0, 2.25, 1.0),
	vec4(2.25, 0.0, -2.25, 1.0),
	vec4(2.25, 0.0, 2.25, 1.0),
	vec4(2.25, 7.0, -2.25, 1.0),
	vec4(2.25, 7.0, 2.25, 1.0)
];
var falange_c_normals = [
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(1.0, 0.0, -0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(-1.0, -0.0, -0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0)
];
var falange_c_texcoords = [
	vec2(0.1637, 0.6727),
	vec2(0.0001, 0.8363),
	vec2(0.3273, 0.8363),
	vec2(0.1637, 0.9999),
	vec2(0.8363, 0.8363),
	vec2(0.9999, 0.6727),
	vec2(0.5818, 0.5818),
	vec2(0.7454, 0.4182),
	vec2(0.9999, 0.1637),
	vec2(0.8363, 0.0001),
	vec2(0.5818, 0.2546),
	vec2(0.3273, 0.0001),
	vec2(0.1637, 0.1637),
	vec2(0.4182, 0.4182)
];
function falange_c_triangles() {
	triangle(falange_c, 2, 3, 6, falange_c_normals, 0, falange_c_texcoords, 0, 1, 2);
	triangle(falange_c, 6, 3, 7, falange_c_normals, 1, falange_c_texcoords, 2, 1, 3);
	triangle(falange_c, 6, 7, 4, falange_c_normals, 2, falange_c_texcoords, 4, 5, 6);
	triangle(falange_c, 4, 7, 5, falange_c_normals, 3, falange_c_texcoords, 6, 5, 7);
	triangle(falange_c, 7, 3, 5, falange_c_normals, 4, falange_c_texcoords, 8, 9, 7);
	triangle(falange_c, 5, 3, 1, falange_c_normals, 5, falange_c_texcoords, 7, 9, 10);
	triangle(falange_c, 3, 2, 1, falange_c_normals, 6, falange_c_texcoords, 11, 12, 10);
	triangle(falange_c, 1, 2, 0, falange_c_normals, 7, falange_c_texcoords, 10, 12, 13);
	triangle(falange_c, 2, 6, 0, falange_c_normals, 8, falange_c_texcoords, 0, 2, 13);
	triangle(falange_c, 0, 6, 4, falange_c_normals, 9, falange_c_texcoords, 13, 2, 6);
	triangle(falange_c, 4, 5, 0, falange_c_normals, 10, falange_c_texcoords, 6, 7, 13);
	triangle(falange_c, 0, 5, 1, falange_c_normals, 11, falange_c_texcoords, 13, 7, 10);
}

// Falangina -------------------------------------------------

var falangina_c = [
	vec4(-2.25, 0.0, -2.25, 1.0),
	vec4(-2.25, 0.0, 2.25, 1.0),
	vec4(-2.25, 0.2500, -2.25, 1.0),
	vec4(-2.25, 0.2500, 2.25, 1.0),
	vec4(2.25, 0.0, -2.25, 1.0),
	vec4(2.25, 0.0, 2.25, 1.0),
	vec4(2.25, 0.2500, -2.25, 1.0),
	vec4(2.25, 0.2500, 2.25, 1.0)
];
var falangina_c_normals = [
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(1.0, 0.0, -0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(-1.0, -0.0, -0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0)
];
var falangina_c_texcoords = [
	vec2(0.5, 0.9999),
	vec2(0.5, 0.5263),
	vec2(0.0264, 0.9999),
	vec2(0.0264, 0.5263),
	vec2(0.0264, 0.5),
	vec2(0.5, 0.5),
	vec2(0.5263, 0.5),
	vec2(0.5263, 0.0264),
	vec2(0.5, 0.0264),
	vec2(0.5, 0.0001),
	vec2(0.0264, 0.0001),
	vec2(0.0264, 0.0264),
	vec2(0.0001, 0.0264),
	vec2(0.0001, 0.5)
];
function falangina_c_triangles() {
	triangle(falangina_c, 7, 6, 3, falangina_c_normals, 0, falangina_c_texcoords, 0, 1, 2);
	triangle(falangina_c, 3, 6, 2, falangina_c_normals, 1, falangina_c_texcoords, 2, 1, 3);
	triangle(falangina_c, 2, 6, 0, falangina_c_normals, 2, falangina_c_texcoords, 3, 1, 4);
	triangle(falangina_c, 0, 6, 4, falangina_c_normals, 3, falangina_c_texcoords, 4, 1, 5);
	triangle(falangina_c, 6, 7, 4, falangina_c_normals, 4, falangina_c_texcoords, 6, 7, 5);
	triangle(falangina_c, 4, 7, 5, falangina_c_normals, 5, falangina_c_texcoords, 5, 7, 8);
	triangle(falangina_c, 7, 3, 5, falangina_c_normals, 6, falangina_c_texcoords, 9, 10, 8);
	triangle(falangina_c, 5, 3, 1, falangina_c_normals, 7, falangina_c_texcoords, 8, 10, 11);
	triangle(falangina_c, 3, 2, 1, falangina_c_normals, 8, falangina_c_texcoords, 12, 13, 11);
	triangle(falangina_c, 1, 2, 0, falangina_c_normals, 9, falangina_c_texcoords, 11, 13, 4);
	triangle(falangina_c, 4, 5, 0, falangina_c_normals, 10, falangina_c_texcoords, 5, 8, 4);
	triangle(falangina_c, 0, 5, 1, falangina_c_normals, 11, falangina_c_texcoords, 4, 8, 11);
}

var falangina_t = [
	vec4(-2.25, 0.0, -2.25, 1.0),
	vec4(-2.25, 0.0, 2.25, 1.0),
	vec4(-2.25, 0.2086, -2.25, 1.0),
	vec4(-2.25, 0.2086, 2.25, 1.0),
	vec4(-2.25, 3.6839, -1.6708, 1.0),
	vec4(-2.25, 3.6839, 1.6708, 1.0),
	vec4(-2.25, 4.2500, -0.1417, 1.0),
	vec4(-2.25, 4.2500, 0.1417, 1.0),
	vec4(-1.7858, 5.5253, -1.5521, 1.0),
	vec4(-1.7858, 5.5253, 1.5521, 1.0),
	vec4(-1.7858, 5.9357, -0.4437, 1.0),
	vec4(-1.7858, 5.9357, 0.4437, 1.0),
	vec4(-1.0, 3.2500, -2.25, 1.0),
	vec4(-1.0, 3.2500, 2.25, 1.0),
	vec4(-1.0, 5.7568, -1.8322, 1.0),
	vec4(-1.0, 5.7568, 1.8322, 1.0),
	vec4(-1.0, 6.2500, -0.5, 1.0),
	vec4(-1.0, 6.2500, 0.5, 1.0),
	vec4(1.0, 3.2500, -2.25, 1.0),
	vec4(1.0, 3.2500, 2.25, 1.0),
	vec4(1.0, 5.7568, -1.8322, 1.0),
	vec4(1.0, 5.7568, 1.8322, 1.0),
	vec4(1.0, 6.2500, -0.5, 1.0),
	vec4(1.0, 6.2500, 0.5, 1.0),
	vec4(1.7858, 5.5253, -1.5521, 1.0),
	vec4(1.7858, 5.5253, 1.5521, 1.0),
	vec4(1.7858, 5.9357, -0.4437, 1.0),
	vec4(1.7858, 5.9357, 0.4437, 1.0),
	vec4(2.25, 0.0, -2.25, 1.0),
	vec4(2.25, 0.0, 2.25, 1.0),
	vec4(2.25, 0.2086, -2.25, 1.0),
	vec4(2.25, 0.2086, 2.25, 1.0),
	vec4(2.25, 3.6839, -1.6708, 1.0),
	vec4(2.25, 3.6839, 1.6708, 1.0),
	vec4(2.25, 4.2500, -0.1417, 1.0),
	vec4(2.25, 4.2500,  0.14, 1.0)
];
var falangina_t_normals = [
	vec4(1.0, -0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(-0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(-0.0, 0.0, -1.0, 1.0),
	vec4(0.9641, 0.2655, -0.0, 1.0),
	vec4(0.9641, 0.2655, -0.0, 1.0),
	vec4(0.9641, 0.249, 0.0922, 1.0),
	vec4(0.9641, 0.249, 0.0922, 1.0),
	vec4(0.9641, 0.249, -0.0922, 1.0),
	vec4(0.9641, 0.249, -0.0922, 1.0),
	vec4(0.3714, 0.8707, 0.3224, 1.0),
	vec4(0.3714, 0.8707, 0.3224, 1.0),
	vec4(0.3714, 0.9285, 0.0, 1.0),
	vec4(0.3714, 0.9285, 0.0, 1.0),
	vec4(0.3714, 0.8707, -0.3224, 1.0),
	vec4(0.3714, 0.8707, -0.3224, 1.0),
	vec4(0.3714, 0.1526, -0.9158, 1.0),
	vec4(0.3714, 0.1526, -0.9158, 1.0),
	vec4(0.3714, 0.1526, -0.9158, 1.0),
	vec4(-0.9641, 0.2655, 0.0, 1.0),
	vec4(-0.9641, 0.2655, 0.0, 1.0),
	vec4(-0.9641, 0.249, -0.0922, 1.0),
	vec4(-0.9641, 0.249, -0.0922, 1.0),
	vec4(-0.9641, 0.249, 0.0922, 1.0),
	vec4(-0.9641, 0.249, 0.0922, 1.0),
	vec4(-0.3714, 0.8707, -0.3224, 1.0),
	vec4(-0.3714, 0.8707, -0.3224, 1.0),
	vec4(-0.3714, 0.9285, 0.0, 1.0),
	vec4(-0.3714, 0.9285, 0.0, 1.0),
	vec4(-0.3714, 0.8707, 0.3224, 1.0),
	vec4(-0.3714, 0.8707, 0.3224, 1.0),
	vec4(-0.3714, 0.1526, 0.9158, 1.0),
	vec4(-0.3714, 0.1526, 0.9158, 1.0),
	vec4(-0.3714, 0.1526, 0.9158, 1.0),
	vec4(-0.3714, 0.1526, -0.9158, 1.0),
	vec4(-0.3714, 0.1526, -0.9158, 1.0),
	vec4(-0.3714, 0.1526, -0.9158, 1.0),
	vec4(0.3714, 0.1526, 0.9158, 1.0),
	vec4(0.3714, 0.1526, 0.9158, 1.0),
	vec4(0.3714, 0.1526, 0.9158, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(-0.0, 0.9378, 0.3472, 1.0),
	vec4(0.0, 0.9378, 0.3472, 1.0),
	vec4(-0.0, 0.1644, 0.9864, 1.0),
	vec4(-0.0, 0.1644, 0.9864, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(-0.0, 0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(-0.0, 0.0, 1.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0)
];
var falangina_t_texcoords = [
	vec2(0.745, 0.4234),
	vec2(0.5532, 0.6242),
	vec2(0.7543, 0.4323),
	vec2(0.5625, 0.6331),
	vec2(0.8847, 0.6062),
	vec2(0.8444, 0.6984),
	vec2(0.7424, 0.7553),
	vec2(0.8325, 0.711),
	vec2(0.3524, 0.4324),
	vec2(0.5443, 0.6335),
	vec2(0.3435, 0.4417),
	vec2(0.3633, 0.7099),
	vec2(0.2754, 0.6276),
	vec2(0.8974, 0.7988),
	vec2(0.9353, 0.7591),
	vec2(0.9649, 0.6923),
	vec2(0.832, 0.8315),
	vec2(0.2157, 0.9413),
	vec2(0.1762, 0.9113),
	vec2(0.1735, 0.9999),
	vec2(0.1249, 0.9777),
	vec2(0.2498, 0.8992),
	vec2(0.2116, 0.8678),
	vec2(0.296, 0.8428),
	vec2(0.2595, 0.808),
	vec2(0.3976, 0.7885),
	vec2(0.2, 0.0569),
	vec2(0.1621, 0.0966),
	vec2(0.265, 0.1448),
	vec2(0.253, 0.1574),
	vec2(0.1325, 0.1635),
	vec2(0.2127, 0.2495),
	vec2(0.355, 0.1005),
	vec2(0.2654, 0.0242),
	vec2(0.0928, 0.7595),
	vec2(0.129, 0.7939),
	vec2(0.1443, 0.7051),
	vec2(0.183, 0.7385),
	vec2(0.0539, 0.7993),
	vec2(0.0905, 0.8357),
	vec2(0.0001, 0.8517),
	vec2(0.0306, 0.8981),
	vec2(0.8456, 0.0279),
	vec2(0.7997, 0.0001),
	vec2(0.738, 0.1417),
	vec2(0.6992, 0.0618),
	vec2(0.5531, 0.2223),
	vec2(0.1936, 0.5975),
	vec2(0.7539, 0.4141),
	vec2(0.9079, 0.261),
	vec2(0.8266, 0.2258),
	vec2(0.9649, 0.1581),
	vec2(0.9351, 0.1136),
	vec2(0.5442, 0.2316),
	vec2(0.3431, 0.4235),
	vec2(0.5349, 0.2227)
];
function falangina_t_triangles() {
	triangle(falangina_t, 29, 28, 31, falangina_t_normals, 0, falangina_t_texcoords, 0, 1, 2);
	triangle(falangina_t, 31, 28, 30, falangina_t_normals, 1, falangina_t_texcoords, 2, 1, 3);
	triangle(falangina_t, 31, 30, 33, falangina_t_normals, 2, falangina_t_texcoords, 2, 3, 4);
	triangle(falangina_t, 33, 30, 35, falangina_t_normals, 3, falangina_t_texcoords, 4, 3, 5);
	triangle(falangina_t, 35, 30, 32, falangina_t_normals, 4, falangina_t_texcoords, 5, 3, 6);
	triangle(falangina_t, 35, 32, 34, falangina_t_normals, 5, falangina_t_texcoords, 5, 6, 7);
	triangle(falangina_t, 28, 0, 30, falangina_t_normals, 6, falangina_t_texcoords, 1, 8, 9);
	triangle(falangina_t, 30, 0, 2, falangina_t_normals, 7, falangina_t_texcoords, 9, 8, 10);
	triangle(falangina_t, 30, 2, 18, falangina_t_normals, 8, falangina_t_texcoords, 9, 10, 11);
	triangle(falangina_t, 18, 2, 12, falangina_t_normals, 9, falangina_t_texcoords, 11, 10, 12);
	triangle(falangina_t, 26, 27, 34, falangina_t_normals, 10, falangina_t_texcoords, 13, 14, 7);
	triangle(falangina_t, 34, 27, 35, falangina_t_normals, 11, falangina_t_texcoords, 7, 14, 5);
	triangle(falangina_t, 27, 25, 35, falangina_t_normals, 12, falangina_t_texcoords, 14, 15, 5);
	triangle(falangina_t, 35, 25, 33, falangina_t_normals, 13, falangina_t_texcoords, 5, 15, 4);
	triangle(falangina_t, 32, 24, 34, falangina_t_normals, 14, falangina_t_texcoords, 6, 16, 7);
	triangle(falangina_t, 34, 24, 26, falangina_t_normals, 15, falangina_t_texcoords, 7, 16, 13);
	triangle(falangina_t, 27, 23, 25, falangina_t_normals, 16, falangina_t_texcoords, 17, 18, 19);
	triangle(falangina_t, 25, 23, 21, falangina_t_normals, 17, falangina_t_texcoords, 19, 18, 20);
	triangle(falangina_t, 27, 26, 23, falangina_t_normals, 18, falangina_t_texcoords, 17, 21, 18);
	triangle(falangina_t, 23, 26, 22, falangina_t_normals, 19, falangina_t_texcoords, 18, 21, 22);
	triangle(falangina_t, 26, 24, 22, falangina_t_normals, 20, falangina_t_texcoords, 21, 23, 22);
	triangle(falangina_t, 22, 24, 20, falangina_t_normals, 21, falangina_t_texcoords, 22, 23, 24);
	triangle(falangina_t, 20, 24, 18, falangina_t_normals, 22, falangina_t_texcoords, 24, 23, 11);
	triangle(falangina_t, 18, 24, 32, falangina_t_normals, 23, falangina_t_texcoords, 11, 23, 25);
	triangle(falangina_t, 18, 32, 30, falangina_t_normals, 24, falangina_t_texcoords, 11, 25, 9);
	triangle(falangina_t, 11, 10, 7, falangina_t_normals, 25, falangina_t_texcoords, 26, 27, 28);
	triangle(falangina_t, 7, 10, 6, falangina_t_normals, 26, falangina_t_texcoords, 28, 27, 29);
	triangle(falangina_t, 10, 8, 6, falangina_t_normals, 27, falangina_t_texcoords, 27, 30, 29);
	triangle(falangina_t, 6, 8, 4, falangina_t_normals, 28, falangina_t_texcoords, 29, 30, 31);
	triangle(falangina_t, 5, 9, 7, falangina_t_normals, 29, falangina_t_texcoords, 32, 33, 28);
	triangle(falangina_t, 7, 9, 11, falangina_t_normals, 30, falangina_t_texcoords, 28, 33, 26);
	triangle(falangina_t, 10, 16, 8, falangina_t_normals, 31, falangina_t_texcoords, 34, 35, 36);
	triangle(falangina_t, 8, 16, 14, falangina_t_normals, 32, falangina_t_texcoords, 36, 35, 37);
	triangle(falangina_t, 10, 11, 16, falangina_t_normals, 33, falangina_t_texcoords, 34, 38, 35);
	triangle(falangina_t, 16, 11, 17, falangina_t_normals, 34, falangina_t_texcoords, 35, 38, 39);
	triangle(falangina_t, 11, 9, 17, falangina_t_normals, 35, falangina_t_texcoords, 38, 40, 39);
	triangle(falangina_t, 17, 9, 15, falangina_t_normals, 36, falangina_t_texcoords, 39, 40, 41);
	triangle(falangina_t, 15, 9, 13, falangina_t_normals, 37, falangina_t_texcoords, 42, 43, 44);
	triangle(falangina_t, 13, 9, 5, falangina_t_normals, 38, falangina_t_texcoords, 44, 43, 45);
	triangle(falangina_t, 13, 5, 3, falangina_t_normals, 39, falangina_t_texcoords, 44, 45, 46);
	triangle(falangina_t, 2, 4, 12, falangina_t_normals, 40, falangina_t_texcoords, 10, 47, 12);
	triangle(falangina_t, 12, 4, 8, falangina_t_normals, 41, falangina_t_texcoords, 12, 47, 36);
	triangle(falangina_t, 12, 8, 14, falangina_t_normals, 42, falangina_t_texcoords, 12, 36, 37);
	triangle(falangina_t, 31, 33, 19, falangina_t_normals, 43, falangina_t_texcoords, 48, 49, 50);
	triangle(falangina_t, 19, 33, 25, falangina_t_normals, 44, falangina_t_texcoords, 50, 49, 51);
	triangle(falangina_t, 19, 25, 21, falangina_t_normals, 45, falangina_t_texcoords, 50, 51, 52);
	triangle(falangina_t, 14, 16, 20, falangina_t_normals, 46, falangina_t_texcoords, 37, 35, 24);
	triangle(falangina_t, 20, 16, 22, falangina_t_normals, 47, falangina_t_texcoords, 24, 35, 22);
	triangle(falangina_t, 16, 17, 22, falangina_t_normals, 48, falangina_t_texcoords, 35, 39, 22);
	triangle(falangina_t, 22, 17, 23, falangina_t_normals, 49, falangina_t_texcoords, 22, 39, 18);
	triangle(falangina_t, 17, 15, 23, falangina_t_normals, 50, falangina_t_texcoords, 39, 41, 18);
	triangle(falangina_t, 23, 15, 21, falangina_t_normals, 51, falangina_t_texcoords, 18, 41, 20);
	triangle(falangina_t, 13, 19, 15, falangina_t_normals, 52, falangina_t_texcoords, 44, 50, 42);
	triangle(falangina_t, 15, 19, 21, falangina_t_normals, 53, falangina_t_texcoords, 42, 50, 52);
	triangle(falangina_t, 14, 20, 12, falangina_t_normals, 54, falangina_t_texcoords, 37, 24, 12);
	triangle(falangina_t, 12, 20, 18, falangina_t_normals, 55, falangina_t_texcoords, 12, 24, 11);
	triangle(falangina_t, 1, 29, 3, falangina_t_normals, 56, falangina_t_texcoords, 53, 0, 46);
	triangle(falangina_t, 3, 29, 31, falangina_t_normals, 57, falangina_t_texcoords, 46, 0, 48);
	triangle(falangina_t, 3, 31, 13, falangina_t_normals, 58, falangina_t_texcoords, 46, 48, 44);
	triangle(falangina_t, 13, 31, 19, falangina_t_normals, 59, falangina_t_texcoords, 44, 48, 50);
	triangle(falangina_t, 0, 1, 2, falangina_t_normals, 60, falangina_t_texcoords, 8, 53, 54);
	triangle(falangina_t, 2, 1, 3, falangina_t_normals, 61, falangina_t_texcoords, 54, 53, 55);
	triangle(falangina_t, 2, 3, 4, falangina_t_normals, 62, falangina_t_texcoords, 54, 55, 31);
	triangle(falangina_t, 4, 3, 6, falangina_t_normals, 63, falangina_t_texcoords, 31, 55, 29);
	triangle(falangina_t, 6, 3, 5, falangina_t_normals, 64, falangina_t_texcoords, 29, 55, 32);
	triangle(falangina_t, 6, 5, 7, falangina_t_normals, 65, falangina_t_texcoords, 29, 32, 28);
	triangle(falangina_t, 1, 0, 29, falangina_t_normals, 66, falangina_t_texcoords, 53, 8, 0);
	triangle(falangina_t, 29, 0, 28, falangina_t_normals, 67, falangina_t_texcoords, 0, 8, 1);
}

// Base--------------------------------------------------------

var base = [
	vec4(-35.0, -12.5, 0.0163, 1.0),
	vec4(-35.0, -10.5, 0.0163, 1.0),
	vec4(-30.319, -12.5, -17.4859, 1.0),
	vec4(-30.319, -10.5, -17.4859, 1.0),
	vec4(-30.3028, -12.5, 17.5141, 1.0),
	vec4(-30.3028, -10.5, 17.5141, 1.0),
	vec4(-17.5141, -12.5, -30.3028, 1.0),
	vec4(-17.5141, -10.5, -30.3028, 1.0),
	vec4(-17.4859, -12.5, 30.319, 1.0),
	vec4(-17.4859, -10.5, 30.319, 1.0),
	vec4(-3.8838, 0.0, -0.9573, 1.0),
	vec4(-3.8838, 0.0, 0.9573, 1.0),
	vec4(-3.5513, -1.5, -0.8753, 1.0),
	vec4(-3.5513, -1.5, 0.8753, 1.0),
	vec4(-3.4992, 1.7355, -0.8625, 1.0),
	vec4(-3.4992, 1.7355, 0.8625, 1.0),
	vec4(-3.4306, -1.5, -1.1054, 1.0),
	vec4(-2.994, 0.0, -2.6525, 1.0),
	vec4(-2.994, 0.0, 2.6525, 1.0),
	vec4(-2.8585, -1.5, 2.1954, 1.0),
	vec4(-2.7378, -1.5, -2.4255, 1.0),
	vec4(-2.7378, -1.5, 2.4255, 1.0),
	vec4(-2.6975, 1.7355, -2.3898, 1.0),
	vec4(-2.6975, 1.7355, 2.3898, 1.0),
	vec4(-2.5239, -1.5, -2.5731, 1.0),
	vec4(-2.4215, 3.1273, -0.5968, 1.0),
	vec4(-2.4215, 3.1273, 0.5968, 1.0),
	vec4(-2.0, -10.5, -0.75, 1.0),
	vec4(-2.0, -10.5, 0.75, 1.0),
	vec4(-2.0, -1.5, -0.75, 1.0),
	vec4(-2.0, -1.5, 0.75, 1.0),
	vec4(-1.8668, 3.1273, -1.6538, 1.0),
	vec4(-1.8668, 3.1273, 1.6538, 1.0),
	vec4(-1.5108, -1.5, 3.2723, 1.0),
	vec4(-1.4184, 0.0, -3.7401, 1.0),
	vec4(-1.4184, 0.0, 3.7401, 1.0),
	vec4(-1.297, -1.5, -3.4199, 1.0),
	vec4(-1.297, -1.5, 3.4199, 1.0),
	vec4(-1.278, 1.7355, -3.3697, 1.0),
	vec4(-1.278, 1.7355, 3.3697, 1.0),
	vec4(-1.0391, -1.5, -3.4513, 1.0),
	vec4(-0.8844, 3.1273, -2.3319, 1.0),
	vec4(-0.8844, 3.1273, 2.3319, 1.0),
	vec4(-0.8642, 3.8997, -0.213, 1.0),
	vec4(-0.8642, 3.8997, 0.213, 1.0),
	vec4(-0.75, -10.5, -2.0, 1.0),
	vec4(-0.75, -10.5, 2.0, 1.0),
	vec4(-0.75, -1.5, -2.0, 1.0),
	vec4(-0.75, -1.5, 2.0, 1.0),
	vec4(-0.6662, 3.8997, -0.5902, 1.0),
	vec4(-0.6662, 3.8997, 0.5902, 1.0),
	vec4(-0.3156, 3.8997, -0.8322, 1.0),
	vec4(-0.3156, 3.8997, 0.8322, 1.0),
	vec4(-0.0163, -12.5, -35.0, 1.0),
	vec4(-0.0163, -10.5, -35.0, 1.0),
	vec4(0.0163, -12.5, 35.0, 1.0),
	vec4(0.0163, -10.5, 35.0, 1.0),
	vec4(0.1073, 3.8997, -0.8836, 1.0),
	vec4(0.1073, 3.8997, 0.8836, 1.0),
	vec4(0.183, -1.5, 3.5996, 1.0),
	vec4(0.3006, 3.1273, -2.4758, 1.0),
	vec4(0.3006, 3.1273, 2.4758, 1.0),
	vec4(0.4344, 1.7355, -3.5776, 1.0),
	vec4(0.4344, 1.7355, 3.5776, 1.0),
	vec4(0.4409, -1.5, -3.631, 1.0),
	vec4(0.4409, -1.5, 3.631, 1.0),
	vec4(0.4821, 0.0, -3.9708, 1.0),
	vec4(0.4821, 0.0, 3.9708, 1.0),
	vec4(0.5056, 3.8997, -0.7325, 1.0),
	vec4(0.5056, 3.8997, 0.7325, 1.0),
	vec4(0.6838, -1.5, -3.5388, 1.0),
	vec4(0.75, -10.5, -2.0, 1.0),
	vec4(0.75, -10.5, 2.0, 1.0),
	vec4(0.75, -1.5, -2.0, 1.0),
	vec4(0.75, -1.5, 2.0, 1.0),
	vec4(0.7881, 3.8997, -0.4136, 1.0),
	vec4(0.7881, 3.8997, 0.4136, 1.0),
	vec4(0.8901, 3.8997, -0.0, 1.0),
	vec4(1.4167, 3.1273, -2.0525, 1.0),
	vec4(1.4167, 3.1273, 2.0525, 1.0),
	vec4(1.8348, -1.5, 3.1023, 1.0),
	vec4(2.0, -10.5, -0.75, 1.0),
	vec4(2.0, -10.5, 0.75, 1.0),
	vec4(2.0, -1.5, -0.75, 1.0),
	vec4(2.0, -1.5, 0.75, 1.0),
	vec4(2.0472, 1.7355, -2.9659, 1.0),
	vec4(2.0472, 1.7355, 2.9659, 1.0),
	vec4(2.0778, -1.5, -3.0102, 1.0),
	vec4(2.0778, -1.5, 3.0102, 1.0),
	vec4(2.2083, 3.1273, -1.159, 1.0),
	vec4(2.2083, 3.1273, 1.159, 1.0),
	vec4(2.2501, -1.5, -2.8157, 1.0),
	vec4(2.2723, 0.0, -3.2919, 1.0),
	vec4(2.2723, 0.0, 3.2919, 1.0),
	vec4(2.494, 3.1273, -0.0, 1.0),
	vec4(3.0664, -1.5, 1.8943, 1.0),
	vec4(3.1911, 1.7355, -1.6748, 1.0),
	vec4(3.1911, 1.7355, 1.6748, 1.0),
	vec4(3.2387, -1.5, -1.6998, 1.0),
	vec4(3.2387, -1.5, 1.6998, 1.0),
	vec4(3.3009, -1.5, -1.4475, 1.0),
	vec4(3.5418, 0.0, -1.8589, 1.0),
	vec4(3.5418, 0.0, 1.8589, 1.0),
	vec4(3.5955, -1.5, 0.2523, 1.0),
	vec4(3.6039, 1.7355, -0.0, 1.0),
	vec4(3.6576, -1.5, 0.0, 1.0),
	vec4(4.0, 0.0, 0.0, 1.0),
	vec4(17.4859, -12.5, -30.319, 1.0),
	vec4(17.4859, -10.5, -30.319, 1.0),
	vec4(17.5141, -12.5, 30.3028, 1.0),
	vec4(17.5141, -10.5, 30.3028, 1.0),
	vec4(30.3028, -12.5, -17.5141, 1.0),
	vec4(30.3028, -10.5, -17.5141, 1.0),
	vec4(30.319, -12.5, 17.4859, 1.0),
	vec4(30.319, -10.5, 17.4859, 1.0),
	vec4(35.0, -12.5, -0.0163, 1.0),
	vec4(35.0, -10.5, -0.02, 1.0)
];
var base_normals = [
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(-0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(-0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(-0.9763, -0.2164, -0.0, 1.0),
	vec4(-0.9763, -0.2164, 0.0, 1.0),
	vec4(-0.8645, -0.2164, -0.4537, 1.0),
	vec4(-0.8645, -0.2164, -0.4537, 1.0),
	vec4(-0.8645, -0.2164, -0.4537, 1.0),
	vec4(-0.5546, -0.2164, -0.8035, 1.0),
	vec4(-0.5546, -0.2164, -0.8035, 1.0),
	vec4(-0.5546, -0.2164, -0.8035, 1.0),
	vec4(-0.1177, -0.2164, -0.9692, 1.0),
	vec4(-0.1177, -0.2164, -0.9692, 1.0),
	vec4(-0.1177, -0.2164, -0.9692, 1.0),
	vec4(0.3462, -0.2164, -0.9129, 1.0),
	vec4(0.3462, -0.2164, -0.9129, 1.0),
	vec4(0.3462, -0.2164, -0.9129, 1.0),
	vec4(0.7308, -0.2164, -0.6474, 1.0),
	vec4(0.7308, -0.2164, -0.6474, 1.0),
	vec4(0.7308, -0.2164, -0.6474, 1.0),
	vec4(0.9479, -0.2164, -0.2336, 1.0),
	vec4(0.9479, -0.2164, -0.2336, 1.0),
	vec4(0.9479, 0.2164, 0.2337, 1.0),
	vec4(0.9479, 0.2164, 0.2336, 1.0),
	vec4(0.7308, 0.2164, 0.6474, 1.0),
	vec4(0.7308, 0.2164, 0.6474, 1.0),
	vec4(0.3462, 0.2164, 0.9129, 1.0),
	vec4(0.3462, 0.2164, 0.9129, 1.0),
	vec4(-0.1177, 0.2164, 0.9692, 1.0),
	vec4(-0.1177, 0.2164, 0.9692, 1.0),
	vec4(-0.5546, 0.2164, 0.8035, 1.0),
	vec4(-0.5546, 0.2164, 0.8035, 1.0),
	vec4(-0.8645, 0.2164, 0.4537, 1.0),
	vec4(-0.8645, 0.2164, 0.4537, 1.0),
	vec4(-0.9763, 0.2164, 0.0, 1.0),
	vec4(-0.9763, 0.2164, 0.0, 1.0),
	vec4(-0.8645, 0.2164, -0.4537, 1.0),
	vec4(-0.8645, 0.2164, -0.4537, 1.0),
	vec4(-0.5546, 0.2164, -0.8035, 1.0),
	vec4(-0.5546, 0.2164, -0.8035, 1.0),
	vec4(-0.1177, 0.2164, -0.9692, 1.0),
	vec4(-0.1177, 0.2164, -0.9692, 1.0),
	vec4(0.3462, 0.2164, -0.9129, 1.0),
	vec4(0.3462, 0.2164, -0.9129, 1.0),
	vec4(0.7308, 0.2164, -0.6474, 1.0),
	vec4(0.7308, 0.2164, -0.6474, 1.0),
	vec4(0.9479, 0.2164, -0.2337, 1.0),
	vec4(0.9479, 0.2164, -0.2336, 1.0),
	vec4(0.7677, 0.6122, 0.1892, 1.0),
	vec4(0.7677, 0.6122, 0.1892, 1.0),
	vec4(0.5918, 0.6122, 0.5243, 1.0),
	vec4(0.5918, 0.6122, 0.5243, 1.0),
	vec4(0.2804, 0.6122, 0.7393, 1.0),
	vec4(0.2804, 0.6122, 0.7393, 1.0),
	vec4(-0.0953, 0.6122, 0.7849, 1.0),
	vec4(-0.0953, 0.6122, 0.7849, 1.0),
	vec4(-0.4492, 0.6122, 0.6507, 1.0),
	vec4(-0.4492, 0.6122, 0.6507, 1.0),
	vec4(-0.7001, 0.6122, 0.3674, 1.0),
	vec4(-0.7001, 0.6122, 0.3674, 1.0),
	vec4(-0.7907, 0.6122, 0.0, 1.0),
	vec4(-0.7907, 0.6122, 0.0, 1.0),
	vec4(-0.7001, 0.6122, -0.3674, 1.0),
	vec4(-0.7001, 0.6122, -0.3674, 1.0),
	vec4(-0.4492, 0.6122, -0.6507, 1.0),
	vec4(-0.4492, 0.6122, -0.6507, 1.0),
	vec4(-0.0953, 0.6122, -0.7849, 1.0),
	vec4(-0.0953, 0.6122, -0.7849, 1.0),
	vec4(0.2804, 0.6122, -0.7393, 1.0),
	vec4(0.2804, 0.6122, -0.7393, 1.0),
	vec4(0.5918, 0.6122, -0.5243, 1.0),
	vec4(0.5918, 0.6122, -0.5243, 1.0),
	vec4(0.7677, 0.6122, -0.1892, 1.0),
	vec4(0.7677, 0.6122, -0.1892, 1.0),
	vec4(0.4314, 0.8959, 0.1063, 1.0),
	vec4(0.4314, 0.8959, 0.1063, 1.0),
	vec4(0.3326, 0.8959, 0.2946, 1.0),
	vec4(0.3326, 0.8959, 0.2946, 1.0),
	vec4(0.1576, 0.8959, 0.4155, 1.0),
	vec4(0.1576, 0.8959, 0.4155, 1.0),
	vec4(-0.0536, 0.8959, 0.4411, 1.0),
	vec4(-0.0536, 0.8959, 0.4411, 1.0),
	vec4(-0.2524, 0.8959, 0.3657, 1.0),
	vec4(-0.2524, 0.8959, 0.3657, 1.0),
	vec4(-0.3934, 0.8959, 0.2065, 1.0),
	vec4(-0.3934, 0.8959, 0.2065, 1.0),
	vec4(-0.4443, 0.8959, 0.0, 1.0),
	vec4(-0.4443, 0.8959, 0.0, 1.0),
	vec4(-0.3934, 0.8959, -0.2065, 1.0),
	vec4(-0.3934, 0.8959, -0.2065, 1.0),
	vec4(-0.2524, 0.8959, -0.3657, 1.0),
	vec4(-0.2524, 0.8959, -0.3657, 1.0),
	vec4(-0.0536, 0.8959, -0.4411, 1.0),
	vec4(-0.0536, 0.8959, -0.4411, 1.0),
	vec4(0.1576, 0.8959, -0.4155, 1.0),
	vec4(0.1576, 0.8959, -0.4155, 1.0),
	vec4(0.3326, 0.8959, -0.2946, 1.0),
	vec4(0.3326, 0.8959, -0.2946, 1.0),
	vec4(0.4314, 0.8959, -0.1063, 1.0),
	vec4(0.4314, 0.8959, -0.1063, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.9479, -0.2164, -0.2337, 1.0),
	vec4(0.9479, -0.2164, 0.2336, 1.0),
	vec4(0.9479, -0.2164, 0.2336, 1.0),
	vec4(0.9479, -0.2164, 0.2337, 1.0),
	vec4(0.7308, -0.2164, 0.6474, 1.0),
	vec4(0.7308, -0.2164, 0.6474, 1.0),
	vec4(0.7308, -0.2164, 0.6474, 1.0),
	vec4(0.3462, -0.2164, 0.9129, 1.0),
	vec4(0.3462, -0.2164, 0.9129, 1.0),
	vec4(0.3462, -0.2164, 0.9129, 1.0),
	vec4(-0.1177, -0.2164, 0.9692, 1.0),
	vec4(-0.1177, -0.2164, 0.9692, 1.0),
	vec4(-0.1177, -0.2164, 0.9692, 1.0),
	vec4(-0.5546, -0.2164, 0.8035, 1.0),
	vec4(-0.5546, -0.2164, 0.8035, 1.0),
	vec4(-0.5546, -0.2164, 0.8035, 1.0),
	vec4(-0.8645, -0.2164, 0.4537, 1.0),
	vec4(-0.8645, -0.2164, 0.4537, 1.0),
	vec4(-0.8645, -0.2164, 0.4537, 1.0),
	vec4(-0.7071, 0.0, 0.7071, 1.0),
	vec4(-0.7071, 0.0, 0.7071, 1.0),
	vec4(-1.0, -0.0, -0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-0.7071, 0.0, -0.7071, 1.0),
	vec4(-0.7071, 0.0, -0.7071, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.7071, -0.0, 0.7071, 1.0),
	vec4(0.7071, 0.0, 0.7071, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(-0.0, 0.0, 1.0, 1.0),
	vec4(0.7071, 0.0, -0.7071, 1.0),
	vec4(0.7071, 0.0, -0.7071, 1.0),
	vec4(1.0, -0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.9658, 0.0, 0.2593, 1.0),
	vec4(-0.9658, 0.0, 0.2593, 1.0),
	vec4(-0.7068, 0.0, 0.7074, 1.0),
	vec4(-0.7068, 0.0, 0.7074, 1.0),
	vec4(-0.2584, 0.0, 0.966, 1.0),
	vec4(-0.2584, 0.0, 0.966, 1.0),
	vec4(0.2593, 0.0, 0.9658, 1.0),
	vec4(0.2593, 0.0, 0.9658, 1.0),
	vec4(0.7074, 0.0, 0.7068, 1.0),
	vec4(0.7074, 0.0, 0.7068, 1.0),
	vec4(0.966, 0.0, 0.2584, 1.0),
	vec4(0.966, 0.0, 0.2584, 1.0),
	vec4(0.9658, 0.0, -0.2593, 1.0),
	vec4(0.9658, 0.0, -0.2593, 1.0),
	vec4(0.7068, 0.0, -0.7074, 1.0),
	vec4(0.7068, 0.0, -0.7074, 1.0),
	vec4(0.2584, 0.0, -0.966, 1.0),
	vec4(0.2584, 0.0, -0.966, 1.0),
	vec4(-0.2593, -0.0, -0.9658, 1.0),
	vec4(-0.2593, 0.0, -0.9658, 1.0),
	vec4(-0.7074, -0.0, -0.7068, 1.0),
	vec4(-0.7074, 0.0, -0.7068, 1.0),
	vec4(-0.966, -0.0, -0.2584, 1.0),
	vec4(-0.966, 0.0, -0.2584, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(-0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(-0.0, -1.0, 0.0, 1.0)
];
var base_texcoords = [
	vec2(0.5647, 0.9422),
	vec2(0.5649, 0.9439),
	vec2(0.5769, 0.9459),
	vec2(0.5645, 0.9524),
	vec2(0.5649, 0.9541),
	vec2(0.5763, 0.9609),
	vec2(0.5644, 0.9626),
	vec2(0.5646, 0.9642),
	vec2(0.5645, 0.973),
	vec2(0.5761, 0.9776),
	vec2(0.5647, 0.9747),
	vec2(0.565, 0.9839),
	vec2(0.5655, 0.9858),
	vec2(0.5795, 0.9905),
	vec2(0.5679, 0.9975),
	vec2(0.5809, 0.8478),
	vec2(0.5678, 0.8404),
	vec2(0.5673, 0.8429),
	vec2(0.5648, 0.855),
	vec2(0.5763, 0.8655),
	vec2(0.5646, 0.8569),
	vec2(0.5634, 0.8665),
	vec2(0.5631, 0.8766),
	vec2(0.5741, 0.8796),
	vec2(0.5632, 0.8782),
	vec2(0.5631, 0.8865),
	vec2(0.5635, 0.8881),
	vec2(0.5754, 0.8952),
	vec2(0.564, 0.8973),
	vec2(0.5646, 0.8991),
	vec2(0.5674, 0.9103),
	vec2(0.5809, 0.9066),
	vec2(0.5795, 0.928),
	vec2(0.5683, 0.9156),
	vec2(0.5677, 0.9182),
	vec2(0.5656, 0.9302),
	vec2(0.5657, 0.9322),
	vec2(0.5544, 0.8661),
	vec2(0.5543, 0.8767),
	vec2(0.5542, 0.887),
	vec2(0.5541, 0.8984),
	vec2(0.5542, 0.9131),
	vec2(0.5526, 0.9134),
	vec2(0.5544, 0.93),
	vec2(0.5554, 0.9422),
	vec2(0.5558, 0.9527),
	vec2(0.5464, 0.9528),
	vec2(0.5464, 0.962),
	vec2(0.5558, 0.9626),
	vec2(0.5452, 0.9717),
	vec2(0.5554, 0.973),
	vec2(0.5427, 0.9825),
	vec2(0.5547, 0.9847),
	vec2(0.5376, 0.9963),
	vec2(0.5542, 0.9999),
	vec2(0.5528, 0.838),
	vec2(0.5367, 0.843),
	vec2(0.5419, 0.856),
	vec2(0.5538, 0.8541),
	vec2(0.5442, 0.8667),
	vec2(0.5448, 0.8764),
	vec2(0.5442, 0.8861),
	vec2(0.5423, 0.8969),
	vec2(0.5382, 0.9104),
	vec2(0.5361, 0.9194),
	vec2(0.5423, 0.9325),
	vec2(0.5452, 0.9432),
	vec2(0.536, 0.9536),
	vec2(0.5359, 0.9611),
	vec2(0.5342, 0.9687),
	vec2(0.5304, 0.9767),
	vec2(0.5232, 0.9853),
	vec2(0.5244, 0.8532),
	vec2(0.5304, 0.8608),
	vec2(0.5333, 0.8687),
	vec2(0.5341, 0.8763),
	vec2(0.5332, 0.8841),
	vec2(0.5302, 0.8921),
	vec2(0.524, 0.9008),
	vec2(0.5241, 0.9309),
	vec2(0.5309, 0.9384),
	vec2(0.5345, 0.946),
	vec2(0.5217, 0.9553),
	vec2(0.5214, 0.9591),
	vec2(0.5201, 0.9628),
	vec2(0.5178, 0.9661),
	vec2(0.5145, 0.9687),
	vec2(0.5157, 0.8664),
	vec2(0.5183, 0.8691),
	vec2(0.5197, 0.8726),
	vec2(0.52, 0.8762),
	vec2(0.5192, 0.8799),
	vec2(0.5174, 0.8832),
	vec2(0.5145, 0.886),
	vec2(0.5163, 0.9455),
	vec2(0.5193, 0.9481),
	vec2(0.5211, 0.9515),
	vec2(0.5145, 0.8314),
	vec2(0.5152, 0.8344),
	vec2(0.5152, 0.8284),
	vec2(0.5172, 0.8262),
	vec2(0.5172, 0.8367),
	vec2(0.5201, 0.8251),
	vec2(0.5201, 0.8378),
	vec2(0.5231, 0.8254),
	vec2(0.5231, 0.8374),
	vec2(0.5257, 0.8272),
	vec2(0.5257, 0.8357),
	vec2(0.5271, 0.8299),
	vec2(0.5271, 0.8329),
	vec2(0.5092, 0.4209),
	vec2(0.4965, 0.4209),
	vec2(0.5092, 0.4855),
	vec2(0.4965, 0.4855),
	vec2(0.52, 0.4855),
	vec2(0.52, 0.4209),
	vec2(0.5327, 0.4209),
	vec2(0.5327, 0.4855),
	vec2(0.5435, 0.4855),
	vec2(0.5435, 0.4209),
	vec2(0.5796, 0.4209),
	vec2(0.5669, 0.4209),
	vec2(0.5796, 0.4855),
	vec2(0.5669, 0.4855),
	vec2(0.4858, 0.4209),
	vec2(0.4858, 0.4855),
	vec2(0.5561, 0.4209),
	vec2(0.5561, 0.4855),
	vec2(0.2365, 0.2289),
	vec2(0.0652, 0.0652),
	vec2(0.2289, 0.2365),
	vec2(0.0001, 0.1778),
	vec2(0.2289, 0.2492),
	vec2(0.0001, 0.3079),
	vec2(0.0652, 0.4205),
	vec2(0.2492, 0.2289),
	vec2(0.3079, 0.0001),
	vec2(0.1778, 0.0001),
	vec2(0.4205, 0.0652),
	vec2(0.2568, 0.2365),
	vec2(0.4855, 0.1778),
	vec2(0.4855, 0.3079),
	vec2(0.2568, 0.2492),
	vec2(0.4205, 0.4205),
	vec2(0.2492, 0.2568),
	vec2(0.3079, 0.4855),
	vec2(0.1778, 0.4855),
	vec2(0.2365, 0.2568),
	vec2(0.0671, 0.558),
	vec2(0.002, 0.6706),
	vec2(0.0795, 0.5652),
	vec2(0.0145, 0.6778),
	vec2(0.185, 0.4877),
	vec2(0.0723, 0.5527),
	vec2(0.1921, 0.5001),
	vec2(0.3222, 0.4858),
	vec2(0.1921, 0.4858),
	vec2(0.3222, 0.5001),
	vec2(0.442, 0.5527),
	vec2(0.3294, 0.4877),
	vec2(0.4348, 0.5652),
	vec2(0.5123, 0.6706),
	vec2(0.4473, 0.558),
	vec2(0.4999, 0.6778),
	vec2(0.5142, 0.8079),
	vec2(0.5142, 0.6778),
	vec2(0.4999, 0.8079),
	vec2(0.4473, 0.9277),
	vec2(0.5123, 0.815),
	vec2(0.4348, 0.9205),
	vec2(0.3294, 0.998),
	vec2(0.442, 0.9329),
	vec2(0.3222, 0.9855),
	vec2(0.1921, 0.9999),
	vec2(0.3222, 0.9999),
	vec2(0.1921, 0.9855),
	vec2(0.0723, 0.9329),
	vec2(0.185, 0.998),
	vec2(0.0795, 0.9205),
	vec2(0.002, 0.815),
	vec2(0.0671, 0.9277),
	vec2(0.0145, 0.8079),
	vec2(0.0001, 0.6778),
	vec2(0.0001, 0.8079)
];
function base_triangles() {
	triangle(base, 98, 100, 83, base_normals, 0, base_texcoords, 0, 1, 2);
	triangle(base, 83, 100, 105, base_normals, 1, base_texcoords, 2, 1, 3);
	triangle(base, 83, 105, 103, base_normals, 2, base_texcoords, 2, 3, 4);
	triangle(base, 83, 103, 84, base_normals, 3, base_texcoords, 2, 4, 5);
	triangle(base, 84, 103, 99, base_normals, 4, base_texcoords, 5, 4, 6);
	triangle(base, 84, 99, 95, base_normals, 5, base_texcoords, 5, 6, 7);
	triangle(base, 95, 88, 84, base_normals, 6, base_texcoords, 7, 8, 5);
	triangle(base, 84, 88, 74, base_normals, 7, base_texcoords, 5, 8, 9);
	triangle(base, 74, 88, 80, base_normals, 8, base_texcoords, 9, 8, 10);
	triangle(base, 74, 80, 65, base_normals, 9, base_texcoords, 9, 10, 11);
	triangle(base, 65, 59, 74, base_normals, 10, base_texcoords, 11, 12, 9);
	triangle(base, 74, 59, 48, base_normals, 11, base_texcoords, 9, 12, 13);
	triangle(base, 48, 59, 37, base_normals, 12, base_texcoords, 13, 12, 14);
	triangle(base, 48, 37, 33, base_normals, 13, base_texcoords, 15, 16, 17);
	triangle(base, 33, 21, 48, base_normals, 14, base_texcoords, 17, 18, 15);
	triangle(base, 48, 21, 30, base_normals, 15, base_texcoords, 15, 18, 19);
	triangle(base, 30, 21, 19, base_normals, 16, base_texcoords, 19, 18, 20);
	triangle(base, 30, 19, 13, base_normals, 17, base_texcoords, 19, 20, 21);
	triangle(base, 13, 12, 30, base_normals, 18, base_texcoords, 21, 22, 19);
	triangle(base, 30, 12, 29, base_normals, 19, base_texcoords, 19, 22, 23);
	triangle(base, 29, 12, 16, base_normals, 20, base_texcoords, 23, 22, 24);
	triangle(base, 29, 16, 20, base_normals, 21, base_texcoords, 23, 24, 25);
	triangle(base, 20, 24, 29, base_normals, 22, base_texcoords, 25, 26, 23);
	triangle(base, 29, 24, 47, base_normals, 23, base_texcoords, 23, 26, 27);
	triangle(base, 47, 24, 36, base_normals, 24, base_texcoords, 27, 26, 28);
	triangle(base, 47, 36, 40, base_normals, 25, base_texcoords, 27, 28, 29);
	triangle(base, 40, 64, 47, base_normals, 26, base_texcoords, 29, 30, 27);
	triangle(base, 47, 64, 73, base_normals, 27, base_texcoords, 27, 30, 31);
	triangle(base, 73, 64, 70, base_normals, 28, base_texcoords, 32, 33, 34);
	triangle(base, 73, 70, 87, base_normals, 29, base_texcoords, 32, 34, 35);
	triangle(base, 87, 91, 73, base_normals, 30, base_texcoords, 35, 36, 32);
	triangle(base, 73, 91, 83, base_normals, 31, base_texcoords, 32, 36, 2);
	triangle(base, 83, 91, 98, base_normals, 32, base_texcoords, 2, 36, 0);
	triangle(base, 13, 11, 12, base_normals, 33, base_texcoords, 21, 37, 22);
	triangle(base, 12, 11, 10, base_normals, 34, base_texcoords, 22, 37, 38);
	triangle(base, 12, 10, 16, base_normals, 35, base_texcoords, 22, 38, 24);
	triangle(base, 16, 10, 17, base_normals, 36, base_texcoords, 24, 38, 39);
	triangle(base, 20, 16, 17, base_normals, 37, base_texcoords, 25, 24, 39);
	triangle(base, 20, 17, 24, base_normals, 38, base_texcoords, 25, 39, 26);
	triangle(base, 24, 17, 34, base_normals, 39, base_texcoords, 26, 39, 40);
	triangle(base, 36, 24, 34, base_normals, 40, base_texcoords, 28, 26, 40);
	triangle(base, 36, 34, 40, base_normals, 41, base_texcoords, 28, 40, 29);
	triangle(base, 40, 34, 66, base_normals, 42, base_texcoords, 29, 40, 41);
	triangle(base, 64, 40, 66, base_normals, 43, base_texcoords, 30, 29, 41);
	triangle(base, 64, 66, 70, base_normals, 44, base_texcoords, 33, 42, 34);
	triangle(base, 70, 66, 92, base_normals, 45, base_texcoords, 34, 42, 43);
	triangle(base, 87, 70, 92, base_normals, 46, base_texcoords, 35, 34, 43);
	triangle(base, 87, 92, 91, base_normals, 47, base_texcoords, 35, 43, 36);
	triangle(base, 91, 92, 101, base_normals, 48, base_texcoords, 36, 43, 44);
	triangle(base, 98, 91, 101, base_normals, 49, base_texcoords, 0, 36, 44);
	triangle(base, 98, 101, 100, base_normals, 50, base_texcoords, 0, 44, 1);
	triangle(base, 100, 101, 106, base_normals, 51, base_texcoords, 1, 44, 45);
	triangle(base, 106, 104, 97, base_normals, 52, base_texcoords, 45, 46, 47);
	triangle(base, 102, 106, 97, base_normals, 53, base_texcoords, 48, 45, 47);
	triangle(base, 102, 97, 86, base_normals, 54, base_texcoords, 48, 47, 49);
	triangle(base, 93, 102, 86, base_normals, 55, base_texcoords, 50, 48, 49);
	triangle(base, 93, 86, 63, base_normals, 56, base_texcoords, 50, 49, 51);
	triangle(base, 67, 93, 63, base_normals, 57, base_texcoords, 52, 50, 51);
	triangle(base, 67, 63, 39, base_normals, 58, base_texcoords, 52, 51, 53);
	triangle(base, 35, 67, 39, base_normals, 59, base_texcoords, 54, 52, 53);
	triangle(base, 35, 39, 23, base_normals, 60, base_texcoords, 55, 56, 57);
	triangle(base, 18, 35, 23, base_normals, 61, base_texcoords, 58, 55, 57);
	triangle(base, 18, 23, 15, base_normals, 62, base_texcoords, 58, 57, 59);
	triangle(base, 11, 18, 15, base_normals, 63, base_texcoords, 37, 58, 59);
	triangle(base, 10, 11, 14, base_normals, 64, base_texcoords, 38, 37, 60);
	triangle(base, 14, 11, 15, base_normals, 65, base_texcoords, 60, 37, 59);
	triangle(base, 10, 14, 22, base_normals, 66, base_texcoords, 38, 60, 61);
	triangle(base, 17, 10, 22, base_normals, 67, base_texcoords, 39, 38, 61);
	triangle(base, 17, 22, 38, base_normals, 68, base_texcoords, 39, 61, 62);
	triangle(base, 34, 17, 38, base_normals, 69, base_texcoords, 40, 39, 62);
	triangle(base, 34, 38, 62, base_normals, 70, base_texcoords, 40, 62, 63);
	triangle(base, 66, 34, 62, base_normals, 71, base_texcoords, 41, 40, 63);
	triangle(base, 66, 62, 85, base_normals, 72, base_texcoords, 42, 64, 65);
	triangle(base, 92, 66, 85, base_normals, 73, base_texcoords, 43, 42, 65);
	triangle(base, 92, 85, 96, base_normals, 74, base_texcoords, 43, 65, 66);
	triangle(base, 101, 92, 96, base_normals, 75, base_texcoords, 44, 43, 66);
	triangle(base, 101, 96, 104, base_normals, 76, base_texcoords, 44, 66, 46);
	triangle(base, 106, 101, 104, base_normals, 77, base_texcoords, 45, 44, 46);
	triangle(base, 104, 94, 90, base_normals, 78, base_texcoords, 46, 67, 68);
	triangle(base, 97, 104, 90, base_normals, 79, base_texcoords, 47, 46, 68);
	triangle(base, 97, 90, 79, base_normals, 80, base_texcoords, 47, 68, 69);
	triangle(base, 86, 97, 79, base_normals, 81, base_texcoords, 49, 47, 69);
	triangle(base, 86, 79, 61, base_normals, 82, base_texcoords, 49, 69, 70);
	triangle(base, 63, 86, 61, base_normals, 83, base_texcoords, 51, 49, 70);
	triangle(base, 63, 61, 42, base_normals, 84, base_texcoords, 51, 70, 71);
	triangle(base, 39, 63, 42, base_normals, 85, base_texcoords, 53, 51, 71);
	triangle(base, 39, 42, 32, base_normals, 86, base_texcoords, 56, 72, 73);
	triangle(base, 23, 39, 32, base_normals, 87, base_texcoords, 57, 56, 73);
	triangle(base, 23, 32, 26, base_normals, 88, base_texcoords, 57, 73, 74);
	triangle(base, 15, 23, 26, base_normals, 89, base_texcoords, 59, 57, 74);
	triangle(base, 14, 15, 25, base_normals, 90, base_texcoords, 60, 59, 75);
	triangle(base, 25, 15, 26, base_normals, 91, base_texcoords, 75, 59, 74);
	triangle(base, 14, 25, 31, base_normals, 92, base_texcoords, 60, 75, 76);
	triangle(base, 22, 14, 31, base_normals, 93, base_texcoords, 61, 60, 76);
	triangle(base, 22, 31, 41, base_normals, 94, base_texcoords, 61, 76, 77);
	triangle(base, 38, 22, 41, base_normals, 95, base_texcoords, 62, 61, 77);
	triangle(base, 38, 41, 60, base_normals, 96, base_texcoords, 62, 77, 78);
	triangle(base, 62, 38, 60, base_normals, 97, base_texcoords, 63, 62, 78);
	triangle(base, 62, 60, 78, base_normals, 98, base_texcoords, 64, 79, 80);
	triangle(base, 85, 62, 78, base_normals, 99, base_texcoords, 65, 64, 80);
	triangle(base, 85, 78, 89, base_normals, 100, base_texcoords, 65, 80, 81);
	triangle(base, 96, 85, 89, base_normals, 101, base_texcoords, 66, 65, 81);
	triangle(base, 96, 89, 94, base_normals, 102, base_texcoords, 66, 81, 67);
	triangle(base, 104, 96, 94, base_normals, 103, base_texcoords, 46, 66, 67);
	triangle(base, 94, 77, 76, base_normals, 104, base_texcoords, 67, 82, 83);
	triangle(base, 90, 94, 76, base_normals, 105, base_texcoords, 68, 67, 83);
	triangle(base, 90, 76, 69, base_normals, 106, base_texcoords, 68, 83, 84);
	triangle(base, 79, 90, 69, base_normals, 107, base_texcoords, 69, 68, 84);
	triangle(base, 79, 69, 58, base_normals, 108, base_texcoords, 69, 84, 85);
	triangle(base, 61, 79, 58, base_normals, 109, base_texcoords, 70, 69, 85);
	triangle(base, 61, 58, 52, base_normals, 110, base_texcoords, 70, 85, 86);
	triangle(base, 42, 61, 52, base_normals, 111, base_texcoords, 71, 70, 86);
	triangle(base, 42, 52, 50, base_normals, 112, base_texcoords, 72, 87, 88);
	triangle(base, 32, 42, 50, base_normals, 113, base_texcoords, 73, 72, 88);
	triangle(base, 32, 50, 44, base_normals, 114, base_texcoords, 73, 88, 89);
	triangle(base, 26, 32, 44, base_normals, 115, base_texcoords, 74, 73, 89);
	triangle(base, 25, 26, 43, base_normals, 116, base_texcoords, 75, 74, 90);
	triangle(base, 43, 26, 44, base_normals, 117, base_texcoords, 90, 74, 89);
	triangle(base, 25, 43, 49, base_normals, 118, base_texcoords, 75, 90, 91);
	triangle(base, 31, 25, 49, base_normals, 119, base_texcoords, 76, 75, 91);
	triangle(base, 31, 49, 51, base_normals, 120, base_texcoords, 76, 91, 92);
	triangle(base, 41, 31, 51, base_normals, 121, base_texcoords, 77, 76, 92);
	triangle(base, 41, 51, 57, base_normals, 122, base_texcoords, 77, 92, 93);
	triangle(base, 60, 41, 57, base_normals, 123, base_texcoords, 78, 77, 93);
	triangle(base, 60, 57, 68, base_normals, 124, base_texcoords, 79, 94, 95);
	triangle(base, 78, 60, 68, base_normals, 125, base_texcoords, 80, 79, 95);
	triangle(base, 78, 68, 75, base_normals, 126, base_texcoords, 80, 95, 96);
	triangle(base, 89, 78, 75, base_normals, 127, base_texcoords, 81, 80, 96);
	triangle(base, 89, 75, 77, base_normals, 128, base_texcoords, 81, 96, 82);
	triangle(base, 94, 89, 77, base_normals, 129, base_texcoords, 67, 81, 82);
	triangle(base, 77, 75, 76, base_normals, 130, base_texcoords, 97, 98, 99);
	triangle(base, 76, 75, 69, base_normals, 131, base_texcoords, 99, 98, 100);
	triangle(base, 69, 75, 68, base_normals, 132, base_texcoords, 100, 98, 101);
	triangle(base, 69, 68, 58, base_normals, 133, base_texcoords, 100, 101, 102);
	triangle(base, 58, 68, 57, base_normals, 134, base_texcoords, 102, 101, 103);
	triangle(base, 58, 57, 52, base_normals, 135, base_texcoords, 102, 103, 104);
	triangle(base, 52, 57, 51, base_normals, 136, base_texcoords, 104, 103, 105);
	triangle(base, 52, 51, 50, base_normals, 137, base_texcoords, 104, 105, 106);
	triangle(base, 50, 51, 49, base_normals, 138, base_texcoords, 106, 105, 107);
	triangle(base, 50, 49, 44, base_normals, 139, base_texcoords, 106, 107, 108);
	triangle(base, 44, 49, 43, base_normals, 140, base_texcoords, 108, 107, 109);
	triangle(base, 105, 100, 106, base_normals, 141, base_texcoords, 3, 1, 45);
	triangle(base, 105, 106, 103, base_normals, 142, base_texcoords, 3, 45, 4);
	triangle(base, 103, 106, 102, base_normals, 143, base_texcoords, 4, 45, 48);
	triangle(base, 99, 103, 102, base_normals, 144, base_texcoords, 6, 4, 48);
	triangle(base, 99, 102, 95, base_normals, 145, base_texcoords, 6, 48, 7);
	triangle(base, 95, 102, 93, base_normals, 146, base_texcoords, 7, 48, 50);
	triangle(base, 88, 95, 93, base_normals, 147, base_texcoords, 8, 7, 50);
	triangle(base, 88, 93, 80, base_normals, 148, base_texcoords, 8, 50, 10);
	triangle(base, 80, 93, 67, base_normals, 149, base_texcoords, 10, 50, 52);
	triangle(base, 65, 80, 67, base_normals, 150, base_texcoords, 11, 10, 52);
	triangle(base, 65, 67, 59, base_normals, 151, base_texcoords, 11, 52, 12);
	triangle(base, 59, 67, 35, base_normals, 152, base_texcoords, 12, 52, 54);
	triangle(base, 37, 59, 35, base_normals, 153, base_texcoords, 14, 12, 54);
	triangle(base, 37, 35, 33, base_normals, 154, base_texcoords, 16, 55, 17);
	triangle(base, 33, 35, 18, base_normals, 155, base_texcoords, 17, 55, 58);
	triangle(base, 21, 33, 18, base_normals, 156, base_texcoords, 18, 17, 58);
	triangle(base, 21, 18, 19, base_normals, 157, base_texcoords, 18, 58, 20);
	triangle(base, 19, 18, 11, base_normals, 158, base_texcoords, 20, 58, 37);
	triangle(base, 13, 19, 11, base_normals, 159, base_texcoords, 21, 20, 37);
	triangle(base, 28, 46, 30, base_normals, 160, base_texcoords, 110, 111, 112);
	triangle(base, 30, 46, 48, base_normals, 161, base_texcoords, 112, 111, 113);
	triangle(base, 30, 29, 28, base_normals, 162, base_texcoords, 112, 114, 110);
	triangle(base, 28, 29, 27, base_normals, 163, base_texcoords, 110, 114, 115);
	triangle(base, 45, 27, 47, base_normals, 164, base_texcoords, 116, 115, 117);
	triangle(base, 47, 27, 29, base_normals, 165, base_texcoords, 117, 115, 114);
	triangle(base, 47, 73, 45, base_normals, 166, base_texcoords, 117, 118, 116);
	triangle(base, 45, 73, 71, base_normals, 167, base_texcoords, 116, 118, 119);
	triangle(base, 72, 82, 74, base_normals, 168, base_texcoords, 120, 121, 122);
	triangle(base, 74, 82, 84, base_normals, 169, base_texcoords, 122, 121, 123);
	triangle(base, 46, 72, 48, base_normals, 170, base_texcoords, 111, 124, 113);
	triangle(base, 48, 72, 74, base_normals, 171, base_texcoords, 113, 124, 125);
	triangle(base, 81, 71, 83, base_normals, 172, base_texcoords, 126, 119, 127);
	triangle(base, 83, 71, 73, base_normals, 173, base_texcoords, 127, 119, 118);
	triangle(base, 82, 81, 84, base_normals, 174, base_texcoords, 121, 126, 123);
	triangle(base, 84, 81, 83, base_normals, 175, base_texcoords, 123, 126, 127);
	triangle(base, 27, 1, 28, base_normals, 176, base_texcoords, 128, 129, 130);
	triangle(base, 28, 1, 5, base_normals, 177, base_texcoords, 130, 129, 131);
	triangle(base, 28, 5, 46, base_normals, 178, base_texcoords, 130, 131, 132);
	triangle(base, 46, 5, 9, base_normals, 179, base_texcoords, 132, 131, 133);
	triangle(base, 46, 9, 56, base_normals, 180, base_texcoords, 132, 133, 134);
	triangle(base, 45, 7, 27, base_normals, 181, base_texcoords, 135, 136, 128);
	triangle(base, 27, 7, 3, base_normals, 182, base_texcoords, 128, 136, 137);
	triangle(base, 27, 3, 1, base_normals, 183, base_texcoords, 128, 137, 129);
	triangle(base, 7, 45, 54, base_normals, 184, base_texcoords, 136, 135, 138);
	triangle(base, 54, 45, 71, base_normals, 185, base_texcoords, 138, 135, 139);
	triangle(base, 54, 71, 108, base_normals, 186, base_texcoords, 138, 139, 140);
	triangle(base, 108, 71, 112, base_normals, 187, base_texcoords, 140, 139, 141);
	triangle(base, 112, 71, 81, base_normals, 188, base_texcoords, 141, 139, 142);
	triangle(base, 112, 81, 116, base_normals, 189, base_texcoords, 141, 142, 143);
	triangle(base, 116, 81, 82, base_normals, 190, base_texcoords, 143, 142, 144);
	triangle(base, 116, 82, 114, base_normals, 191, base_texcoords, 143, 144, 145);
	triangle(base, 114, 82, 110, base_normals, 192, base_texcoords, 145, 144, 146);
	triangle(base, 110, 82, 72, base_normals, 193, base_texcoords, 146, 144, 147);
	triangle(base, 110, 72, 56, base_normals, 194, base_texcoords, 146, 147, 134);
	triangle(base, 56, 72, 46, base_normals, 195, base_texcoords, 134, 147, 132);
	triangle(base, 5, 1, 4, base_normals, 196, base_texcoords, 148, 149, 150);
	triangle(base, 4, 1, 0, base_normals, 197, base_texcoords, 150, 149, 151);
	triangle(base, 9, 5, 8, base_normals, 198, base_texcoords, 152, 153, 154);
	triangle(base, 8, 5, 4, base_normals, 199, base_texcoords, 154, 153, 150);
	triangle(base, 56, 9, 55, base_normals, 200, base_texcoords, 155, 156, 157);
	triangle(base, 55, 9, 8, base_normals, 201, base_texcoords, 157, 156, 154);
	triangle(base, 110, 56, 109, base_normals, 202, base_texcoords, 158, 159, 160);
	triangle(base, 109, 56, 55, base_normals, 203, base_texcoords, 160, 159, 157);
	triangle(base, 114, 110, 113, base_normals, 204, base_texcoords, 161, 162, 163);
	triangle(base, 113, 110, 109, base_normals, 205, base_texcoords, 163, 162, 160);
	triangle(base, 116, 114, 115, base_normals, 206, base_texcoords, 164, 165, 166);
	triangle(base, 115, 114, 113, base_normals, 207, base_texcoords, 166, 165, 163);
	triangle(base, 112, 116, 111, base_normals, 208, base_texcoords, 167, 168, 169);
	triangle(base, 111, 116, 115, base_normals, 209, base_texcoords, 169, 168, 166);
	triangle(base, 108, 112, 107, base_normals, 210, base_texcoords, 170, 171, 172);
	triangle(base, 107, 112, 111, base_normals, 211, base_texcoords, 172, 171, 169);
	triangle(base, 54, 108, 53, base_normals, 212, base_texcoords, 173, 174, 175);
	triangle(base, 53, 108, 107, base_normals, 213, base_texcoords, 175, 174, 172);
	triangle(base, 7, 54, 6, base_normals, 214, base_texcoords, 176, 177, 178);
	triangle(base, 6, 54, 53, base_normals, 215, base_texcoords, 178, 177, 175);
	triangle(base, 3, 7, 2, base_normals, 216, base_texcoords, 179, 180, 181);
	triangle(base, 2, 7, 6, base_normals, 217, base_texcoords, 181, 180, 178);
	triangle(base, 1, 3, 0, base_normals, 218, base_texcoords, 182, 183, 151);
	triangle(base, 0, 3, 2, base_normals, 219, base_texcoords, 151, 183, 181);
	triangle(base, 2, 115, 0, base_normals, 220, base_texcoords, 181, 166, 151);
	triangle(base, 0, 115, 113, base_normals, 221, base_texcoords, 151, 166, 163);
	triangle(base, 0, 113, 4, base_normals, 222, base_texcoords, 151, 163, 150);
	triangle(base, 4, 113, 109, base_normals, 223, base_texcoords, 150, 163, 160);
	triangle(base, 4, 109, 8, base_normals, 224, base_texcoords, 150, 160, 154);
	triangle(base, 8, 109, 55, base_normals, 225, base_texcoords, 154, 160, 157);
	triangle(base, 115, 2, 111, base_normals, 226, base_texcoords, 166, 181, 169);
	triangle(base, 111, 2, 6, base_normals, 227, base_texcoords, 169, 181, 178);
	triangle(base, 111, 6, 107, base_normals, 228, base_texcoords, 169, 178, 172);
	triangle(base, 107, 6, 53, base_normals, 229, base_texcoords, 172, 178, 175);
}

// Palm --------------------------------------------

// Humanoid palm

var palmo_h = [
	vec4(-18.0, 5.6, 0.0, 1.0),
	vec4(-17.3518, 5.6, 2.3875, 1.0),
	vec4(-16.465, 5.6, -3.4658, 1.0),
	vec4(-15.0, 16.6, 0.0, 1.0),
	vec4(-14.6912, 5.6, 4.5515, 1.0),
	vec4(-14.3837, 16.6, 1.7251, 1.0),
	vec4(-14.3322, 24.6128, 0.0001, 1.0),
	vec4(-13.973, 16.6, -1.3956, 1.0),
	vec4(-13.7091, 24.6017, 2.0754, 1.0),
	vec4(-13.5743, 24.6016, -1.7536, 1.0),
	vec4(-13.4779, 28.6, 0.0106, 1.0),
	vec4(-12.968, 28.6, -1.5662, 1.0),
	vec4(-12.9528, 28.6, 1.8922, 1.0),
	vec4(-11.3566, 5.6, -4.9203, 1.0),
	vec4(-10.8563, 0.602, -0.0092, 1.0),
	vec4(-10.7776, 28.6, -2.5369, 1.0),
	vec4(-10.6483, 28.6, 2.9077, 1.0),
	vec4(-10.637, 24.6044, -2.9412, 1.0),
	vec4(-10.555, 24.6096, 3.162, 1.0),
	vec4(-10.5407, 5.6, 5.7931, 1.0),
	vec4(-10.5407, 5.6, 4.341, 1.0),
	vec4(-10.5407, 5.6, -4.9281, 1.0),
	vec4(-10.5203, 5.6, -4.3356, 1.0),
	vec4(-10.5, 8.4386, -4.3301, 1.0),
	vec4(-10.5, 10.631, 4.3301, 1.0),
	vec4(-10.217, 11.7485, 4.0472, 1.0),
	vec4(-10.1967, 0.5879, 1.6375, 1.0),
	vec4(-10.1543, 16.6, 2.6695, 1.0),
	vec4(-10.1434, 0.8426, -2.6809, 1.0),
	vec4(-10.1402, 16.6, -2.7506, 1.0),
	vec4(-9.8434, 11.6502, -3.6736, 1.0),
	vec4(-9.3984, 0.8382, 3.8254, 1.0),
	vec4(-8.9205, 16.6, -2.7506, 1.0),
	vec4(-8.8394, 16.6, 2.6695, 1.0),
	vec4(-8.6699, 5.6, 2.5, 1.0),
	vec4(-8.6699, 5.6, -2.5, 1.0),
	vec4(-8.6699, 16.6, -2.5, 1.0),
	vec4(-8.6699, 16.6, 2.5, 1.0),
	vec4(-8.0, 5.6, 0.0, 1.0),
	vec4(-8.0, 16.6, 0.0, 1.0),
	vec4(-7.8466, 0.0, -0.0284, 1.0),
	vec4(-6.8969, -0.0, 2.2617, 1.0),
	vec4(-6.3875, 0.9986, 5.3529, 1.0),
	vec4(-5.6628, 0.9609, -4.4268, 1.0),
	vec4(-5.0388, -0.0, 3.2342, 1.0),
	vec4(-3.9625, 0.0, -2.3805, 1.0),
	vec4(-3.4993, 11.1, -3.8265, 1.0),
	vec4(-3.0, 5.6, -5.0, 1.0),
	vec4(-1.0, 5.6, 5.7931, 1.0),
	vec4(-0.5348, 0.997, -4.9997, 1.0),
	vec4(-0.1772, 0.9923, 5.1405, 1.0),
	vec4(-0.1362, -0.0, 3.0042, 1.0),
	vec4(0.0077, 0.0, -2.9786, 1.0),
	vec4(2.0, 11.1, 4.2313, 1.0),
	vec4(3.0676, 16.6, -2.7506, 1.0),
	vec4(3.3916, 24.6011, -2.9415, 1.0),
	vec4(3.3916, 28.6, -2.5369, 1.0),
	vec4(3.5743, 11.1451, -3.7692, 1.0),
	vec4(4.0893, 5.6, -4.8047, 1.0),
	vec4(5.0, 16.6, 2.6695, 1.0),
	vec4(5.0735, 24.6075, 3.1621, 1.0),
	vec4(5.0735, 28.6, 2.9077, 1.0),
	vec4(6.2681, 0.0, -2.0843, 1.0),
	vec4(6.4815, 0.9976, -4.1434, 1.0),
	vec4(6.6708, -0.0, 2.3938, 1.0),
	vec4(7.786, 0.9994, 4.2674, 1.0),
	vec4(8.3598, -0.0, 0.8485, 1.0),
	vec4(8.5012, 0.0, -0.5955, 1.0),
	vec4(8.6464, 1.5274, -3.4482, 1.0),
	vec4(9.0, 5.6, 4.0, 1.0),
	vec4(10.14, 11.1, 3.0268, 1.0),
	vec4(10.3903, 0.9676, -2.043, 1.0),
	vec4(10.5621, 5.6, -3.464, 1.0),
	vec4(10.5778, 0.9639, 1.8082, 1.0),
	vec4(10.5925, 11.1, -2.8404, 1.0),
	vec4(10.6229, 16.6, -2.2168, 1.0),
	vec4(10.8669, 0.911, 0.0, 1.0),
	vec4(11.2799, 16.6, 2.0536, 1.0),
	vec4(11.4331, 24.618, -2.7636, 1.0),
	vec4(11.5414, 28.6, 2.9077, 1.0),
	vec4(11.5711, 24.6248, 2.9592, 1.0),
	vec4(11.6583, 28.6, -2.5369, 1.0),
	vec4(12.0, 5.6, 2.0, 1.0),
	vec4(12.2588, 5.6, -2.2491, 1.0),
	vec4(13.0, 5.6, 0.0, 1.0),
	vec4(13.0155, 11.1, 1.6162, 1.0),
	vec4(13.0218, 11.1, -1.5965, 1.0),
	vec4(13.0878, 28.6, 1.6819, 1.0),
	vec4(13.2122, 28.6, -1.3029, 1.0),
	vec4(13.4876, 28.6, -0.006, 1.0),
	vec4(13.6999, 24.6012, 1.7215, 1.0),
	vec4(13.7031, 24.6025, -1.3705, 1.0),
	vec4(13.7569, 11.1, 0.0, 1.0),
	vec4(13.7847, 16.6, -0.9439, 1.0),
	vec4(14.0311, 16.6, 1.2324, 1.0),
	vec4(14.1711, 24.6035, 0.0, 1.0),
	vec4(14.51, 16.6, 0.0, 1.0)
];
var palmo_h_normals = [
	vec4(-0.9994, 0.0071, 0.0343, 1.0),
	vec4(-0.7071, -0.0, 0.7071, 1.0),
	vec4(-0.7042, 0.0011, 0.71, 1.0),
	vec4(-0.7163, 0.0038, 0.6978, 1.0),
	vec4(-0.9659, -0.0, 0.2588, 1.0),
	vec4(-0.9659, -0.0, 0.2588, 1.0),
	vec4(-0.9659, 0.0, -0.2588, 1.0),
	vec4(-0.9659, 0.0, -0.2588, 1.0),
	vec4(-0.7071, 0.0, -0.7071, 1.0),
	vec4(-0.7071, 0.0, -0.7071, 1.0),
	vec4(-1.0, 0.0081, 0.0, 1.0),
	vec4(0.0, 0.1836, -0.983, 1.0),
	vec4(0.0, 0.0568, -0.9984, 1.0),
	vec4(0.5231, 0.0189, -0.8521, 1.0),
	vec4(0.9394, 0.1208, -0.3209, 1.0),
	vec4(0.9515, 0.1631, 0.2607, 1.0),
	vec4(-0.4005, 0.1174, 0.9088, 1.0),
	vec4(-0.9001, 0.1939, -0.3903, 1.0),
	vec4(-0.9434, 0.2015, 0.2633, 1.0),
	vec4(0.6179, 0.1023, 0.7795, 1.0),
	vec4(0.0, -0.0614, 0.9981, 1.0),
	vec4(0.0, 0.0636, 0.998, 1.0),
	vec4(-0.3254, 0.0526, 0.9441, 1.0),
	vec4(0.0312, 0.0132, 0.9994, 1.0),
	vec4(-0.4039, 0.078, -0.9115, 1.0),
	vec4(0.0, 0.1007, -0.9949, 1.0),
	vec4(-0.3332, -0.0256, -0.9425, 1.0),
	vec4(-0.0, 0.0636, 0.998, 1.0),
	vec4(0.097, -0.1151, 0.9886, 1.0),
	vec4(0.0313, -0.0617, 0.9976, 1.0),
	vec4(-0.0, -0.0614, 0.9981, 1.0),
	vec4(0.0, -0.0614, 0.9981, 1.0),
	vec4(-0.2174, -0.0707, 0.9735, 1.0),
	vec4(-0.3257, -0.0139, 0.9454, 1.0),
	vec4(-0.9546, 0.0796, 0.2871, 1.0),
	vec4(-0.8036, 0.067, -0.5914, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.382, -0.917, -0.1145, 1.0),
	vec4(0.3657, -0.9268, 0.0856, 1.0),
	vec4(0.272, -0.9069, 0.3219, 1.0),
	vec4(0.0498, -0.8932, 0.4468, 1.0),
	vec4(0.0135, -0.9068, 0.4214, 1.0),
	vec4(-0.1952, -0.9783, 0.0698, 1.0),
	vec4(-0.1301, -0.9263, 0.3537, 1.0),
	vec4(-0.1226, -0.9716, -0.2025, 1.0),
	vec4(-0.2062, -0.9608, 0.1852, 1.0),
	vec4(-0.1102, -0.9317, -0.346, 1.0),
	vec4(0.0527, -0.9008, -0.431, 1.0),
	vec4(0.2931, -0.849, -0.4397, 1.0),
	vec4(-0.1951, -0.9708, -0.1395, 1.0),
	vec4(0.0933, -0.8797, -0.4663, 1.0),
	vec4(0.0, -0.1402, 0.9901, 1.0),
	vec4(0.1765, 0.0106, 0.9842, 1.0),
	vec4(0.6421, -0.2272, 0.7322, 1.0),
	vec4(0.8991, -0.409, 0.1557, 1.0),
	vec4(0.8719, -0.3966, -0.2873, 1.0),
	vec4(0.5619, -0.2616, -0.7848, 1.0),
	vec4(0.3013, 0.0196, -0.9533, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.5021, -0.032, 0.8642, 1.0),
	vec4(0.9642, 0.0238, 0.264, 1.0),
	vec4(0.9456, 0.0405, -0.3229, 1.0),
	vec4(0.5224, -0.0401, -0.8517, 1.0),
	vec4(0.3716, -0.1005, -0.9229, 1.0),
	vec4(0.0222, -0.0703, -0.9973, 1.0),
	vec4(-0.0, -0.0238, -0.9997, 1.0),
	vec4(0.0, -0.0238, -0.9997, 1.0),
	vec4(-0.0, 0.0636, 0.998, 1.0),
	vec4(-0.3744, -0.0453, -0.9262, 1.0),
	vec4(0.9013, -0.124, -0.415, 1.0),
	vec4(0.7867, -0.1083, -0.6077, 1.0),
	vec4(0.4554, 0.0423, -0.8893, 1.0),
	vec4(0.4536, 0.0979, -0.8858, 1.0),
	vec4(0.1311, 0.111, -0.9851, 1.0),
	vec4(0.0269, 0.2109, -0.9771, 1.0),
	vec4(0.1299, 0.1937, -0.9724, 1.0),
	vec4(-0.7014, 0.0041, -0.7127, 1.0),
	vec4(-0.0, 0.2732, 0.962, 1.0),
	vec4(0.1435, 0.1971, 0.9698, 1.0),
	vec4(0.1449, 0.1432, 0.979, 1.0),
	vec4(0.4394, 0.0674, 0.8958, 1.0),
	vec4(0.2843, 0.1096, 0.9524, 1.0),
	vec4(0.9003, -0.1374, 0.413, 1.0),
	vec4(-0.0, 0.2732, 0.962, 1.0),
	vec4(0.9213, -0.1449, 0.3609, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.1209, 0.0647, -0.9906, 1.0),
	vec4(-0.0095, -0.1173, -0.9931, 1.0),
	vec4(-0.2427, -0.4631, -0.8524, 1.0),
	vec4(-0.5683, -0.792, -0.223, 1.0),
	vec4(-0.5594, -0.7999, 0.2172, 1.0),
	vec4(-0.488, -0.6339, 0.6, 1.0),
	vec4(-0.3637, -0.5219, 0.7716, 1.0),
	vec4(-0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(-0.1892, -0.9788, 0.0785, 1.0),
	vec4(-0.145, -0.9498, 0.2771, 1.0),
	vec4(0.0205, -0.8993, 0.4369, 1.0),
	vec4(0.0378, -0.906, 0.4215, 1.0),
	vec4(0.2703, -0.9163, 0.2955, 1.0),
	vec4(0.3516, -0.9355, 0.0344, 1.0),
	vec4(-0.0579, -0.9213, -0.3845, 1.0),
	vec4(0.0651, -0.8879, -0.4555, 1.0),
	vec4(0.3337, -0.8615, -0.3828, 1.0),
	vec4(0.1083, -0.1204, 0.9868, 1.0),
	vec4(0.034, -0.0647, 0.9973, 1.0),
	vec4(-0.2705, -0.3306, 0.9042, 1.0),
	vec4(-0.5298, -0.7989, 0.2847, 1.0),
	vec4(-0.5565, -0.817, 0.1511, 1.0),
	vec4(-0.5558, -0.794, -0.2462, 1.0),
	vec4(-0.31, -0.4685, -0.8273, 1.0),
	vec4(-0.1069, -0.2172, -0.9703, 1.0),
	vec4(-0.0055, 0.2082, -0.9781, 1.0),
	vec4(-0.042, -0.9005, -0.4329, 1.0),
	vec4(-0.0095, -0.0052, -0.9999, 1.0),
	vec4(0.0273, -0.1283, -0.9914, 1.0),
	vec4(0.2018, -0.0987, -0.9744, 1.0),
	vec4(0.5527, -0.2631, -0.7908, 1.0),
	vec4(0.9011, -0.3733, -0.2206, 1.0),
	vec4(0.8584, -0.2811, 0.4292, 1.0),
	vec4(0.5521, -0.0975, 0.8281, 1.0),
	vec4(0.0068, 0.1842, -0.9829, 1.0),
	vec4(0.1988, 0.1977, -0.9599, 1.0),
	vec4(0.5799, 0.0886, -0.8099, 1.0),
	vec4(0.9455, -0.0942, -0.3116, 1.0),
	vec4(0.07, 0.112, -0.9912, 1.0),
	vec4(0.3728, 0.0582, -0.9261, 1.0),
	vec4(0.0705, -0.0266, -0.9972, 1.0),
	vec4(0.9057, -0.0761, -0.4171, 1.0),
	vec4(0.7911, -0.0245, -0.6111, 1.0),
	vec4(0.9304, 0.0398, 0.3645, 1.0),
	vec4(0.9019, -0.1241, 0.4137, 1.0),
	vec4(0.8877, -0.1222, 0.4439, 1.0),
	vec4(0.5542, -0.0443, 0.8312, 1.0),
	vec4(0.4403, -0.0187, 0.8976, 1.0),
	vec4(0.284, -0.1177, 0.9516, 1.0),
	vec4(-0.9397, 0.0645, 0.3358, 1.0),
	vec4(-0.9175, 0.028, -0.3967, 1.0),
	vec4(-0.0, -0.0238, -0.9997, 1.0),
	vec4(0.0951, 0.2236, 0.97, 1.0),
	vec4(0.1748, 0.1363, 0.9751, 1.0),
	vec4(-0.017, 0.2495, 0.9682, 1.0),
	vec4(-0.0, 0.2792, 0.9602, 1.0),
	vec4(-0.0077, 0.1847, -0.9828, 1.0),
	vec4(-0.0093, 0.2063, -0.9785, 1.0),
	vec4(-0.0109, 0.2024, -0.9792, 1.0),
	vec4(0.5027, 0.0149, 0.8643, 1.0),
	vec4(-0.9399, 0.1908, 0.2832, 1.0),
	vec4(-0.9397, 0.1567, -0.3039, 1.0),
	vec4(-0.373, 0.0998, -0.9224, 1.0),
	vec4(0.0, 0.1007, -0.9949, 1.0),
	vec4(0.0218, 0.1006, -0.9947, 1.0),
	vec4(0.6194, 0.0893, -0.78, 1.0),
	vec4(0.9621, 0.1495, 0.2279, 1.0),
	vec4(0.9648, 0.1647, -0.2048, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 0.2732, 0.962, 1.0),
	vec4(-0.7071, 0.0, -0.7071, 1.0),
	vec4(-0.7071, -0.0, 0.7071, 1.0),
	vec4(0.0067, 0.1983, -0.9801, 1.0)
];
var palmo_h_texcoords = [
	vec2(0.6782, 0.7646),
	vec2(0.6798, 0.7204),
	vec2(0.6709, 0.722),
	vec2(0.6663, 0.8929),
	vec2(0.6727, 0.8152),
	vec2(0.6319, 0.7289),
	vec2(0.593, 0.7357),
	vec2(0.6609, 0.8938),
	vec2(0.6221, 0.9007),
	vec2(0.5542, 0.7426),
	vec2(0.5833, 0.9075),
	vec2(0.5377, 0.8405),
	vec2(0.5797, 0.9081),
	vec2(0.5149, 0.7495),
	vec2(0.4931, 0.7534),
	vec2(0.5287, 0.8248),
	vec2(0.2978, 0.7759),
	vec2(0.1999, 0.5969),
	vec2(0.2104, 0.7786),
	vec2(0.0215, 0.7873),
	vec2(0.0257, 0.9175),
	vec2(0.0874, 0.9099),
	vec2(0.0892, 0.9502),
	vec2(0.0895, 0.9723),
	vec2(0.0273, 0.9488),
	vec2(0.0883, 0.9999),
	vec2(0.0271, 0.9697),
	vec2(0.0177, 0.4694),
	vec2(0.0813, 0.4672),
	vec2(0.0105, 0.4272),
	vec2(0.083, 0.5257),
	vec2(0.0831, 0.4983),
	vec2(0.0206, 0.5012),
	vec2(0.0737, 0.0012),
	vec2(0.0024, 0.0079),
	vec2(0.0018, 0.0428),
	vec2(0.2071, 0.1624),
	vec2(0.0693, 0.1573),
	vec2(0.1953, 0.3862),
	vec2(0.0001, 0.1574),
	vec2(0.0755, 0.4169),
	vec2(0.0716, 0.0445),
	vec2(0.021, 0.5278),
	vec2(0.0195, 0.5662),
	vec2(0.0812, 0.5722),
	vec2(0.0845, 0.7859),
	vec2(0.1986, 0.5166),
	vec2(0.2, 0.5788),
	vec2(0.2137, 0.0514),
	vec2(0.1958, 0.4058),
	vec2(0.1952, 0.4692),
	vec2(0.198, 0.4932),
	vec2(0.7245, 0.9999),
	vec2(0.6801, 0.9702),
	vec2(0.6988, 0.9938),
	vec2(0.5551, 0.2528),
	vec2(0.5687, 0.29),
	vec2(0.5877, 0.2559),
	vec2(0.5276, 0.2606),
	vec2(0.5477, 0.2946),
	vec2(0.4943, 0.3072),
	vec2(0.5274, 0.3221),
	vec2(0.4931, 0.4293),
	vec2(0.5289, 0.4249),
	vec2(0.5013, 0.5244),
	vec2(0.5666, 0.5765),
	vec2(0.5935, 0.5837),
	vec2(0.5884, 0.5364),
	vec2(0.5343, 0.4994),
	vec2(0.5308, 0.5681),
	vec2(0.6344, 0.5683),
	vec2(0.6172, 0.4735),
	vec2(0.5522, 0.5258),
	vec2(0.6543, 0.4962),
	vec2(0.5947, 0.3205),
	vec2(0.6543, 0.4166),
	vec2(0.6285, 0.3119),
	vec2(0.6164, 0.2777),
	vec2(0.4678, 0.2836),
	vec2(0.3847, 0.2822),
	vec2(0.3565, 0.4146),
	vec2(0.4849, 0.1407),
	vec2(0.405, 0.1119),
	vec2(0.4928, 0.0747),
	vec2(0.4102, 0.0486),
	vec2(0.4928, 0.9366),
	vec2(0.4819, 0.908),
	vec2(0.4052, 0.9348),
	vec2(0.3983, 0.9005),
	vec2(0.3955, 0.8697),
	vec2(0.4716, 0.8747),
	vec2(0.459, 0.8385),
	vec2(0.4631, 0.8004),
	vec2(0.385, 0.7713),
	vec2(0.5992, 0.9476),
	vec2(0.5919, 0.926),
	vec2(0.6739, 0.9125),
	vec2(0.666, 0.8957),
	vec2(0.5907, 0.9294),
	vec2(0.2161, 0.0001),
	vec2(0.2132, 0.9914),
	vec2(0.2133, 0.9706),
	vec2(0.2127, 0.9519),
	vec2(0.2117, 0.8981),
	vec2(0.3184, 0.9277),
	vec2(0.323, 0.9552),
	vec2(0.2339, 0.955),
	vec2(0.2364, 0.9739),
	vec2(0.3128, 0.8851),
	vec2(0.2265, 0.9003),
	vec2(0.3692, 0.6652),
	vec2(0.2882, 0.6697),
	vec2(0.2986, 0.2214),
	vec2(0.2711, 0.4056),
	vec2(0.3106, 0.0806),
	vec2(0.3136, 0.0237),
	vec2(0.331, 0.9822),
	vec2(0.4188, 0.9671),
	vec2(0.242, 0.9944),
	vec2(0.5306, 0.6914),
	vec2(0.556, 0.7222),
	vec2(0.5329, 0.6282),
	vec2(0.5085, 0.6895),
	vec2(0.6712, 0.7037),
	vec2(0.6721, 0.6913),
	vec2(0.6622, 0.7032),
	vec2(0.4464, 0.6882),
	vec2(0.4291, 0.6123),
	vec2(0.3446, 0.5557),
	vec2(0.3471, 0.5656),
	vec2(0.4173, 0.5339),
	vec2(0.33, 0.5108),
	vec2(0.4236, 0.4928),
	vec2(0.3456, 0.4889),
	vec2(0.4303, 0.4694),
	vec2(0.4273, 0.4329),
	vec2(0.3445, 0.4564),
	vec2(0.3495, 0.4777),
	vec2(0.4394, 0.384),
	vec2(0.6191, 0.4125),
	vec2(0.2724, 0.5849),
	vec2(0.287, 0.4096),
	vec2(0.3123, 0.5729),
	vec2(0.0251, 0.9968),
	vec2(0.6394, 0.9999),
	vec2(0.6798, 0.9741),
	vec2(0.6672, 0.9973),
	vec2(0.6568, 0.6119),
	vec2(0.6063, 0.584),
	vec2(0.5692, 0.5907),
	vec2(0.7442, 0.9957),
	vec2(0.763, 0.972),
	vec2(0.6801, 0.8717),
	vec2(0.763, 0.8461),
	vec2(0.6801, 0.6323),
	vec2(0.763, 0.6304),
	vec2(0.7242, 0.5892),
	vec2(0.6956, 0.5972),
	vec2(0.7482, 0.597)
];
function palmo_h_triangles() {
	triangle(palmo_h, 23, 21, 22, palmo_h_normals, 0, palmo_h_texcoords, 0, 1, 2);
	triangle(palmo_h, 32, 30, 35, palmo_h_normals, 1, palmo_h_texcoords, 3, 4, 5);
	triangle(palmo_h, 35, 30, 22, palmo_h_normals, 2, palmo_h_texcoords, 5, 4, 2);
	triangle(palmo_h, 22, 30, 23, palmo_h_normals, 3, palmo_h_texcoords, 2, 4, 0);
	triangle(palmo_h, 35, 38, 36, palmo_h_normals, 4, palmo_h_texcoords, 5, 6, 7);
	triangle(palmo_h, 36, 38, 39, palmo_h_normals, 5, palmo_h_texcoords, 7, 6, 8);
	triangle(palmo_h, 38, 34, 39, palmo_h_normals, 6, palmo_h_texcoords, 6, 9, 8);
	triangle(palmo_h, 39, 34, 37, palmo_h_normals, 7, palmo_h_texcoords, 8, 9, 10);
	triangle(palmo_h, 34, 25, 33, palmo_h_normals, 8, palmo_h_texcoords, 9, 11, 12);
	triangle(palmo_h, 34, 33, 37, palmo_h_normals, 9, palmo_h_texcoords, 9, 12, 10);
	triangle(palmo_h, 20, 19, 24, palmo_h_normals, 10, palmo_h_texcoords, 13, 14, 15);
	triangle(palmo_h, 57, 32, 54, palmo_h_normals, 11, palmo_h_texcoords, 16, 17, 18);
	triangle(palmo_h, 56, 81, 78, palmo_h_normals, 12, palmo_h_texcoords, 19, 20, 21);
	triangle(palmo_h, 81, 91, 78, palmo_h_normals, 13, palmo_h_texcoords, 20, 22, 21);
	triangle(palmo_h, 95, 91, 88, palmo_h_normals, 14, palmo_h_texcoords, 23, 22, 24);
	triangle(palmo_h, 90, 95, 89, palmo_h_normals, 15, palmo_h_texcoords, 25, 23, 26);
	triangle(palmo_h, 12, 8, 16, palmo_h_normals, 16, palmo_h_texcoords, 27, 28, 29);
	triangle(palmo_h, 9, 6, 10, palmo_h_normals, 17, palmo_h_texcoords, 30, 31, 32);
	triangle(palmo_h, 12, 10, 6, palmo_h_normals, 18, palmo_h_texcoords, 27, 32, 31);
	triangle(palmo_h, 90, 87, 79, palmo_h_normals, 19, palmo_h_texcoords, 33, 34, 35);
	triangle(palmo_h, 59, 60, 33, palmo_h_normals, 20, palmo_h_texcoords, 36, 37, 38);
	triangle(palmo_h, 61, 16, 18, palmo_h_normals, 21, palmo_h_texcoords, 39, 29, 40);
	triangle(palmo_h, 8, 18, 16, palmo_h_normals, 22, palmo_h_texcoords, 28, 40, 29);
	triangle(palmo_h, 60, 80, 79, palmo_h_normals, 23, palmo_h_texcoords, 37, 41, 35);
	triangle(palmo_h, 11, 15, 17, palmo_h_normals, 24, palmo_h_texcoords, 42, 43, 44);
	triangle(palmo_h, 55, 17, 15, palmo_h_normals, 25, palmo_h_texcoords, 45, 44, 43);
	triangle(palmo_h, 7, 9, 29, palmo_h_normals, 26, palmo_h_texcoords, 46, 30, 47);
	triangle(palmo_h, 61, 60, 79, palmo_h_normals, 27, palmo_h_texcoords, 39, 37, 35);
	triangle(palmo_h, 77, 80, 59, palmo_h_normals, 28, palmo_h_texcoords, 48, 41, 36);
	triangle(palmo_h, 80, 60, 59, palmo_h_normals, 29, palmo_h_texcoords, 41, 37, 36);
	triangle(palmo_h, 60, 18, 33, palmo_h_normals, 30, palmo_h_texcoords, 37, 40, 38);
	triangle(palmo_h, 33, 18, 27, palmo_h_normals, 31, palmo_h_texcoords, 38, 40, 49);
	triangle(palmo_h, 27, 18, 5, palmo_h_normals, 32, palmo_h_texcoords, 49, 40, 50);
	triangle(palmo_h, 5, 18, 8, palmo_h_normals, 33, palmo_h_texcoords, 50, 40, 28);
	triangle(palmo_h, 8, 6, 3, palmo_h_normals, 34, palmo_h_texcoords, 28, 31, 51);
	triangle(palmo_h, 7, 3, 6, palmo_h_normals, 35, palmo_h_texcoords, 46, 51, 31);
	triangle(palmo_h, 89, 79, 87, palmo_h_normals, 36, palmo_h_texcoords, 52, 53, 54);
	triangle(palmo_h, 76, 67, 71, palmo_h_normals, 37, palmo_h_texcoords, 55, 56, 57);
	triangle(palmo_h, 76, 73, 66, palmo_h_normals, 38, palmo_h_texcoords, 55, 58, 59);
	triangle(palmo_h, 73, 65, 64, palmo_h_normals, 39, palmo_h_texcoords, 58, 60, 61);
	triangle(palmo_h, 64, 65, 50, palmo_h_normals, 40, palmo_h_texcoords, 61, 60, 62);
	triangle(palmo_h, 51, 50, 42, palmo_h_normals, 41, palmo_h_texcoords, 63, 62, 64);
	triangle(palmo_h, 26, 14, 40, palmo_h_normals, 42, palmo_h_texcoords, 65, 66, 67);
	triangle(palmo_h, 44, 42, 31, palmo_h_normals, 43, palmo_h_texcoords, 68, 64, 69);
	triangle(palmo_h, 28, 45, 40, palmo_h_normals, 44, palmo_h_texcoords, 70, 71, 67);
	triangle(palmo_h, 41, 31, 26, palmo_h_normals, 45, palmo_h_texcoords, 72, 69, 65);
	triangle(palmo_h, 43, 45, 28, palmo_h_normals, 46, palmo_h_texcoords, 73, 71, 70);
	triangle(palmo_h, 62, 49, 63, palmo_h_normals, 47, palmo_h_texcoords, 74, 75, 76);
	triangle(palmo_h, 68, 67, 62, palmo_h_normals, 48, palmo_h_texcoords, 77, 56, 74);
	triangle(palmo_h, 14, 28, 40, palmo_h_normals, 49, palmo_h_texcoords, 66, 70, 67);
	triangle(palmo_h, 68, 71, 67, palmo_h_normals, 50, palmo_h_texcoords, 77, 57, 56);
	triangle(palmo_h, 50, 48, 19, palmo_h_normals, 51, palmo_h_texcoords, 78, 79, 80);
	triangle(palmo_h, 65, 69, 48, palmo_h_normals, 52, palmo_h_texcoords, 81, 82, 79);
	triangle(palmo_h, 65, 73, 82, palmo_h_normals, 53, palmo_h_texcoords, 81, 83, 84);
	triangle(palmo_h, 73, 76, 84, palmo_h_normals, 54, palmo_h_texcoords, 85, 86, 87);
	triangle(palmo_h, 83, 84, 76, palmo_h_normals, 55, palmo_h_texcoords, 88, 87, 86);
	triangle(palmo_h, 72, 83, 71, palmo_h_normals, 56, palmo_h_texcoords, 89, 88, 90);
	triangle(palmo_h, 68, 63, 58, palmo_h_normals, 57, palmo_h_texcoords, 91, 92, 93);
	triangle(palmo_h, 45, 41, 40, palmo_h_normals, 58, palmo_h_texcoords, 71, 72, 67);
	triangle(palmo_h, 27, 39, 37, palmo_h_normals, 59, palmo_h_texcoords, 94, 8, 95);
	triangle(palmo_h, 36, 29, 32, palmo_h_normals, 60, palmo_h_texcoords, 7, 96, 97);
	triangle(palmo_h, 27, 37, 33, palmo_h_normals, 61, palmo_h_texcoords, 94, 95, 98);
	triangle(palmo_h, 94, 90, 80, palmo_h_normals, 62, palmo_h_texcoords, 99, 33, 41);
	triangle(palmo_h, 95, 90, 94, palmo_h_normals, 63, palmo_h_texcoords, 23, 25, 100);
	triangle(palmo_h, 91, 95, 96, palmo_h_normals, 64, palmo_h_texcoords, 22, 23, 101);
	triangle(palmo_h, 78, 91, 93, palmo_h_normals, 65, palmo_h_texcoords, 21, 22, 102);
	triangle(palmo_h, 75, 78, 93, palmo_h_normals, 66, palmo_h_texcoords, 103, 21, 102);
	triangle(palmo_h, 55, 78, 75, palmo_h_normals, 67, palmo_h_texcoords, 45, 21, 103);
	triangle(palmo_h, 54, 32, 17, palmo_h_normals, 68, palmo_h_texcoords, 18, 17, 44);
	triangle(palmo_h, 29, 17, 32, palmo_h_normals, 69, palmo_h_texcoords, 47, 44, 17);
	triangle(palmo_h, 60, 61, 18, palmo_h_normals, 70, palmo_h_texcoords, 37, 39, 40);
	triangle(palmo_h, 9, 17, 29, palmo_h_normals, 71, palmo_h_texcoords, 30, 44, 47);
	triangle(palmo_h, 86, 92, 84, palmo_h_normals, 72, palmo_h_texcoords, 104, 105, 87);
	triangle(palmo_h, 93, 96, 92, palmo_h_normals, 73, palmo_h_texcoords, 106, 107, 105);
	triangle(palmo_h, 74, 86, 83, palmo_h_normals, 74, palmo_h_texcoords, 108, 104, 88);
	triangle(palmo_h, 86, 74, 75, palmo_h_normals, 75, palmo_h_texcoords, 104, 108, 109);
	triangle(palmo_h, 57, 74, 72, palmo_h_normals, 76, palmo_h_texcoords, 16, 108, 89);
	triangle(palmo_h, 58, 47, 46, palmo_h_normals, 77, palmo_h_texcoords, 93, 110, 111);
	triangle(palmo_h, 74, 57, 54, palmo_h_normals, 78, palmo_h_texcoords, 108, 16, 18);
	triangle(palmo_h, 34, 20, 24, palmo_h_normals, 79, palmo_h_texcoords, 9, 13, 15);
	triangle(palmo_h, 48, 53, 25, palmo_h_normals, 80, palmo_h_texcoords, 79, 112, 113);
	triangle(palmo_h, 70, 53, 48, palmo_h_normals, 81, palmo_h_texcoords, 114, 112, 79);
	triangle(palmo_h, 53, 70, 77, palmo_h_normals, 82, palmo_h_texcoords, 112, 114, 48);
	triangle(palmo_h, 85, 70, 69, palmo_h_normals, 83, palmo_h_texcoords, 115, 114, 82);
	triangle(palmo_h, 94, 77, 70, palmo_h_normals, 84, palmo_h_texcoords, 99, 48, 114);
	triangle(palmo_h, 92, 85, 82, palmo_h_normals, 85, palmo_h_texcoords, 105, 116, 117);
	triangle(palmo_h, 33, 25, 53, palmo_h_normals, 86, palmo_h_texcoords, 38, 113, 112);
	triangle(palmo_h, 96, 94, 85, palmo_h_normals, 87, palmo_h_texcoords, 107, 118, 116);
	triangle(palmo_h, 20, 34, 38, palmo_h_normals, 88, palmo_h_texcoords, 119, 120, 6);
	triangle(palmo_h, 4, 19, 20, palmo_h_normals, 89, palmo_h_texcoords, 121, 122, 119);
	triangle(palmo_h, 21, 13, 22, palmo_h_normals, 90, palmo_h_texcoords, 123, 124, 125);
	triangle(palmo_h, 63, 49, 47, palmo_h_normals, 91, palmo_h_texcoords, 92, 126, 110);
	triangle(palmo_h, 43, 13, 21, palmo_h_normals, 92, palmo_h_texcoords, 127, 128, 129);
	triangle(palmo_h, 28, 2, 13, palmo_h_normals, 93, palmo_h_texcoords, 130, 131, 128);
	triangle(palmo_h, 2, 28, 14, palmo_h_normals, 94, palmo_h_texcoords, 131, 130, 132);
	triangle(palmo_h, 0, 14, 26, palmo_h_normals, 95, palmo_h_texcoords, 133, 132, 134);
	triangle(palmo_h, 31, 4, 1, palmo_h_normals, 96, palmo_h_texcoords, 135, 136, 137);
	triangle(palmo_h, 4, 31, 42, palmo_h_normals, 97, palmo_h_texcoords, 136, 135, 138);
	triangle(palmo_h, 44, 41, 45, palmo_h_normals, 98, palmo_h_texcoords, 68, 72, 71);
	triangle(palmo_h, 44, 45, 52, palmo_h_normals, 99, palmo_h_texcoords, 68, 71, 139);
	triangle(palmo_h, 51, 44, 52, palmo_h_normals, 100, palmo_h_texcoords, 63, 68, 139);
	triangle(palmo_h, 51, 52, 62, palmo_h_normals, 101, palmo_h_texcoords, 63, 139, 74);
	triangle(palmo_h, 64, 51, 62, palmo_h_normals, 102, palmo_h_texcoords, 61, 63, 74);
	triangle(palmo_h, 66, 64, 62, palmo_h_normals, 103, palmo_h_texcoords, 59, 61, 74);
	triangle(palmo_h, 67, 66, 62, palmo_h_normals, 104, palmo_h_texcoords, 56, 59, 74);
	triangle(palmo_h, 40, 41, 26, palmo_h_normals, 105, palmo_h_texcoords, 67, 72, 65);
	triangle(palmo_h, 41, 44, 31, palmo_h_normals, 106, palmo_h_texcoords, 72, 68, 69);
	triangle(palmo_h, 44, 51, 42, palmo_h_normals, 107, palmo_h_texcoords, 68, 63, 64);
	triangle(palmo_h, 51, 64, 50, palmo_h_normals, 108, palmo_h_texcoords, 63, 61, 62);
	triangle(palmo_h, 66, 73, 64, palmo_h_normals, 109, palmo_h_texcoords, 59, 58, 61);
	triangle(palmo_h, 67, 76, 66, palmo_h_normals, 110, palmo_h_texcoords, 56, 55, 59);
	triangle(palmo_h, 45, 43, 52, palmo_h_normals, 111, palmo_h_texcoords, 71, 73, 139);
	triangle(palmo_h, 52, 49, 62, palmo_h_normals, 112, palmo_h_texcoords, 139, 75, 74);
	triangle(palmo_h, 63, 68, 62, palmo_h_normals, 113, palmo_h_texcoords, 76, 77, 74);
	triangle(palmo_h, 50, 65, 48, palmo_h_normals, 114, palmo_h_texcoords, 78, 81, 79);
	triangle(palmo_h, 42, 50, 19, palmo_h_normals, 115, palmo_h_texcoords, 138, 78, 80);
	triangle(palmo_h, 19, 4, 42, palmo_h_normals, 116, palmo_h_texcoords, 80, 136, 138);
	triangle(palmo_h, 26, 31, 1, palmo_h_normals, 117, palmo_h_texcoords, 134, 135, 137);
	triangle(palmo_h, 1, 0, 26, palmo_h_normals, 118, palmo_h_texcoords, 137, 133, 134);
	triangle(palmo_h, 0, 2, 14, palmo_h_normals, 119, palmo_h_texcoords, 133, 131, 132);
	triangle(palmo_h, 43, 28, 13, palmo_h_normals, 120, palmo_h_texcoords, 127, 130, 128);
	triangle(palmo_h, 49, 43, 21, palmo_h_normals, 121, palmo_h_texcoords, 126, 127, 129);
	triangle(palmo_h, 30, 46, 47, palmo_h_normals, 122, palmo_h_texcoords, 140, 111, 110);
	triangle(palmo_h, 43, 49, 52, palmo_h_normals, 123, palmo_h_texcoords, 73, 75, 139);
	triangle(palmo_h, 49, 21, 47, palmo_h_normals, 124, palmo_h_texcoords, 126, 129, 110);
	triangle(palmo_h, 58, 63, 47, palmo_h_normals, 125, palmo_h_texcoords, 93, 92, 110);
	triangle(palmo_h, 72, 68, 58, palmo_h_normals, 126, palmo_h_texcoords, 89, 91, 93);
	triangle(palmo_h, 68, 72, 71, palmo_h_normals, 127, palmo_h_texcoords, 91, 89, 90);
	triangle(palmo_h, 71, 83, 76, palmo_h_normals, 128, palmo_h_texcoords, 90, 88, 86);
	triangle(palmo_h, 82, 73, 84, palmo_h_normals, 129, palmo_h_texcoords, 117, 85, 87);
	triangle(palmo_h, 69, 65, 82, palmo_h_normals, 130, palmo_h_texcoords, 82, 81, 84);
	triangle(palmo_h, 57, 58, 46, palmo_h_normals, 131, palmo_h_texcoords, 16, 93, 111);
	triangle(palmo_h, 58, 57, 72, palmo_h_normals, 132, palmo_h_texcoords, 93, 16, 89);
	triangle(palmo_h, 72, 74, 83, palmo_h_normals, 133, palmo_h_texcoords, 89, 108, 88);
	triangle(palmo_h, 83, 86, 84, palmo_h_normals, 134, palmo_h_texcoords, 88, 104, 87);
	triangle(palmo_h, 75, 74, 54, palmo_h_normals, 135, palmo_h_texcoords, 109, 108, 18);
	triangle(palmo_h, 93, 86, 75, palmo_h_normals, 136, palmo_h_texcoords, 106, 104, 109);
	triangle(palmo_h, 54, 55, 75, palmo_h_normals, 137, palmo_h_texcoords, 18, 45, 103);
	triangle(palmo_h, 86, 93, 92, palmo_h_normals, 138, palmo_h_texcoords, 104, 106, 105);
	triangle(palmo_h, 93, 91, 96, palmo_h_normals, 139, palmo_h_texcoords, 102, 22, 101);
	triangle(palmo_h, 96, 95, 94, palmo_h_normals, 140, palmo_h_texcoords, 101, 23, 100);
	triangle(palmo_h, 92, 96, 85, palmo_h_normals, 141, palmo_h_texcoords, 105, 107, 116);
	triangle(palmo_h, 84, 92, 82, palmo_h_normals, 142, palmo_h_texcoords, 87, 105, 117);
	triangle(palmo_h, 82, 85, 69, palmo_h_normals, 143, palmo_h_texcoords, 84, 115, 82);
	triangle(palmo_h, 85, 94, 70, palmo_h_normals, 144, palmo_h_texcoords, 115, 99, 114);
	triangle(palmo_h, 77, 94, 80, palmo_h_normals, 145, palmo_h_texcoords, 48, 99, 41);
	triangle(palmo_h, 8, 3, 5, palmo_h_normals, 146, palmo_h_texcoords, 28, 51, 50);
	triangle(palmo_h, 9, 7, 6, palmo_h_normals, 147, palmo_h_texcoords, 30, 46, 31);
	triangle(palmo_h, 55, 54, 17, palmo_h_normals, 148, palmo_h_texcoords, 45, 18, 44);
	triangle(palmo_h, 59, 53, 77, palmo_h_normals, 149, palmo_h_texcoords, 36, 112, 48);
	triangle(palmo_h, 69, 70, 48, palmo_h_normals, 150, palmo_h_texcoords, 82, 114, 79);
	triangle(palmo_h, 48, 25, 24, palmo_h_normals, 151, palmo_h_texcoords, 79, 113, 141);
	triangle(palmo_h, 19, 48, 24, palmo_h_normals, 152, palmo_h_texcoords, 80, 79, 141);
	triangle(palmo_h, 46, 30, 32, palmo_h_normals, 153, palmo_h_texcoords, 111, 140, 17);
	triangle(palmo_h, 21, 23, 47, palmo_h_normals, 154, palmo_h_texcoords, 129, 142, 110);
	triangle(palmo_h, 23, 30, 47, palmo_h_normals, 155, palmo_h_texcoords, 142, 140, 110);
	triangle(palmo_h, 80, 90, 79, palmo_h_normals, 156, palmo_h_texcoords, 41, 33, 35);
	triangle(palmo_h, 8, 12, 6, palmo_h_normals, 157, palmo_h_texcoords, 28, 27, 31);
	triangle(palmo_h, 11, 9, 10, palmo_h_normals, 158, palmo_h_texcoords, 42, 30, 32);
	triangle(palmo_h, 9, 11, 17, palmo_h_normals, 159, palmo_h_texcoords, 30, 42, 44);
	triangle(palmo_h, 56, 55, 15, palmo_h_normals, 160, palmo_h_texcoords, 19, 45, 43);
	triangle(palmo_h, 55, 56, 78, palmo_h_normals, 161, palmo_h_texcoords, 45, 19, 21);
	triangle(palmo_h, 88, 91, 81, palmo_h_normals, 162, palmo_h_texcoords, 24, 22, 20);
	triangle(palmo_h, 87, 90, 89, palmo_h_normals, 163, palmo_h_texcoords, 143, 25, 26);
	triangle(palmo_h, 89, 95, 88, palmo_h_normals, 164, palmo_h_texcoords, 26, 23, 24);
	triangle(palmo_h, 27, 36, 39, palmo_h_normals, 165, palmo_h_texcoords, 94, 7, 8);
	triangle(palmo_h, 27, 29, 36, palmo_h_normals, 166, palmo_h_texcoords, 94, 96, 7);
	triangle(palmo_h, 5, 29, 27, palmo_h_normals, 167, palmo_h_texcoords, 144, 96, 94);
	triangle(palmo_h, 7, 29, 5, palmo_h_normals, 168, palmo_h_texcoords, 145, 96, 144);
	triangle(palmo_h, 3, 7, 5, palmo_h_normals, 169, palmo_h_texcoords, 146, 145, 144);
	triangle(palmo_h, 13, 2, 22, palmo_h_normals, 170, palmo_h_texcoords, 124, 147, 125);
	triangle(palmo_h, 2, 0, 22, palmo_h_normals, 171, palmo_h_texcoords, 147, 148, 125);
	triangle(palmo_h, 0, 1, 22, palmo_h_normals, 172, palmo_h_texcoords, 148, 149, 125);
	triangle(palmo_h, 1, 4, 22, palmo_h_normals, 173, palmo_h_texcoords, 149, 121, 125);
	triangle(palmo_h, 22, 4, 35, palmo_h_normals, 174, palmo_h_texcoords, 125, 121, 5);
	triangle(palmo_h, 35, 4, 38, palmo_h_normals, 175, palmo_h_texcoords, 5, 121, 6);
	triangle(palmo_h, 4, 20, 38, palmo_h_normals, 176, palmo_h_texcoords, 121, 119, 6);
	triangle(palmo_h, 88, 79, 89, palmo_h_normals, 177, palmo_h_texcoords, 150, 53, 52);
	triangle(palmo_h, 81, 79, 88, palmo_h_normals, 178, palmo_h_texcoords, 151, 53, 150);
	triangle(palmo_h, 81, 61, 79, palmo_h_normals, 179, palmo_h_texcoords, 151, 152, 53);
	triangle(palmo_h, 56, 61, 81, palmo_h_normals, 180, palmo_h_texcoords, 153, 152, 151);
	triangle(palmo_h, 56, 16, 61, palmo_h_normals, 181, palmo_h_texcoords, 153, 154, 152);
	triangle(palmo_h, 15, 16, 56, palmo_h_normals, 182, palmo_h_texcoords, 155, 154, 153);
	triangle(palmo_h, 10, 12, 16, palmo_h_normals, 183, palmo_h_texcoords, 156, 157, 154);
	triangle(palmo_h, 15, 11, 16, palmo_h_normals, 184, palmo_h_texcoords, 155, 158, 154);
	triangle(palmo_h, 11, 10, 16, palmo_h_normals, 185, palmo_h_texcoords, 158, 156, 154);
	triangle(palmo_h, 59, 33, 53, palmo_h_normals, 186, palmo_h_texcoords, 36, 38, 112);
	triangle(palmo_h, 25, 34, 24, palmo_h_normals, 187, palmo_h_texcoords, 11, 9, 15);
	triangle(palmo_h, 36, 32, 35, palmo_h_normals, 188, palmo_h_texcoords, 7, 3, 5);
	triangle(palmo_h, 57, 46, 32, palmo_h_normals, 189, palmo_h_texcoords, 16, 111, 17);
}

// Robotic palm

var palmo_r = [
	vec4(-25.0, 12.0, -6.6987, 1.0),
	vec4(-25.0, 12.0, 6.6987, 1.0),
	vec4(-25.0, 18.0, -6.6987, 1.0),
	vec4(-25.0, 18.0, 6.6987, 1.0),
	vec4(-21.0, 20.0, -5.6269, 1.0),
	vec4(-21.0, 20.0, 5.6269, 1.0),
	vec4(-18.3013, 12.0, -18.3013, 1.0),
	vec4(-18.3013, 12.0, 18.3013, 1.0),
	vec4(-18.3013, 18.0, -18.3013, 1.0),
	vec4(-18.3013, 18.0, 18.3013, 1.0),
	vec4(-15.3731, 20.0, -15.3731, 1.0),
	vec4(-15.3731, 20.0, 15.3731, 1.0),
	vec4(-13.0, 0.0, -3.4833, 1.0),
	vec4(-13.0, 0.0, 3.4833, 1.0),
	vec4(-12.0, 20.0, -3.2154, 1.0),
	vec4(-12.0, 20.0, 3.2154, 1.0),
	vec4(-9.5167, 0.0, -9.5167, 1.0),
	vec4(-9.5167, 0.0, 9.5167, 1.0),
	vec4(-8.7846, 20.0, -8.7846, 1.0),
	vec4(-8.7846, 20.0, 8.7846, 1.0),
	vec4(-6.6987, 12.0, -25.0, 1.0),
	vec4(-6.6987, 12.0, 25.0, 1.0),
	vec4(-6.6987, 18.0, -25.0, 1.0),
	vec4(-6.6987, 18.0, 25.0, 1.0),
	vec4(-5.6269, 20.0, -21.0, 1.0),
	vec4(-5.6269, 20.0, 21.0, 1.0),
	vec4(-3.4833, 0.0, -13.0, 1.0),
	vec4(-3.4833, 0.0, 13.0, 1.0),
	vec4(-3.2154, 20.0, -12.0, 1.0),
	vec4(-3.2154, 20.0, 12.0, 1.0),
	vec4(-0.0, 15.6324, 0.0, 1.0),
	vec4(3.2154, 20.0, -12.0, 1.0),
	vec4(3.2154, 20.0, 12.0, 1.0),
	vec4(3.4833, 0.0, -13.0, 1.0),
	vec4(3.4833, 0.0, 13.0, 1.0),
	vec4(5.6269, 20.0, -21.0, 1.0),
	vec4(5.6269, 20.0, 21.0, 1.0),
	vec4(6.6987, 12.0, -25.0, 1.0),
	vec4(6.6987, 12.0, 25.0, 1.0),
	vec4(6.6987, 18.0, -25.0, 1.0),
	vec4(6.6987, 18.0, 25.0, 1.0),
	vec4(8.7846, 20.0, -8.7846, 1.0),
	vec4(8.7846, 20.0, 8.7846, 1.0),
	vec4(9.5167, 0.0, -9.5167, 1.0),
	vec4(9.5167, 0.0, 9.5167, 1.0),
	vec4(12.0, 20.0, -3.2154, 1.0),
	vec4(12.0, 20.0, 3.2154, 1.0),
	vec4(13.0, 0.0, -3.4833, 1.0),
	vec4(13.0, 0.0, 3.4833, 1.0),
	vec4(15.3731, 20.0, -15.3731, 1.0),
	vec4(15.3731, 20.0, 15.3731, 1.0),
	vec4(18.3013, 12.0, -18.3013, 1.0),
	vec4(18.3013, 12.0, 18.3013, 1.0),
	vec4(18.3013, 18.0, -18.3013, 1.0),
	vec4(18.3013, 18.0, 18.3013, 1.0),
	vec4(21.0, 20.0, -5.6269, 1.0),
	vec4(21.0, 20.0, 5.6269, 1.0),
	vec4(25.0, 12.0, -6.6987, 1.0),
	vec4(25.0, 12.0, 6.6987, 1.0),
	vec4(25.0, 18.0, -6.6987, 1.0),
	vec4(25.0, 18.0, 6.7, 1.0)
];
var palmo_r_normals = [
	vec4(0.2962, 0.9397, -0.171, 1.0),
	vec4(0.171, 0.9397, -0.2962, 1.0),
	vec4(0.0, 0.9397, -0.342, 1.0),
	vec4(-0.171, 0.9397, -0.2962, 1.0),
	vec4(-0.2962, 0.9397, -0.171, 1.0),
	vec4(-0.342, 0.9397, 0.0, 1.0),
	vec4(-0.2962, 0.9397, 0.171, 1.0),
	vec4(-0.171, 0.9397, 0.2962, 1.0),
	vec4(0.0, 0.9397, 0.342, 1.0),
	vec4(0.171, 0.9397, 0.2962, 1.0),
	vec4(0.2962, 0.9397, 0.171, 1.0),
	vec4(0.342, 0.9397, 0.0, 1.0),
	vec4(0.3873, 0.8944, -0.2236, 1.0),
	vec4(0.3873, 0.8944, -0.2236, 1.0),
	vec4(0.4472, 0.8944, -0.0, 1.0),
	vec4(0.4472, 0.8944, -0.0, 1.0),
	vec4(0.3873, 0.8944, 0.2236, 1.0),
	vec4(0.3873, 0.8944, 0.2236, 1.0),
	vec4(0.2236, 0.8944, 0.3873, 1.0),
	vec4(0.2236, 0.8944, 0.3873, 1.0),
	vec4(-0.0, 0.8944, 0.4472, 1.0),
	vec4(0.0, 0.8944, 0.4472, 1.0),
	vec4(-0.2236, 0.8944, 0.3873, 1.0),
	vec4(-0.2236, 0.8944, 0.3873, 1.0),
	vec4(-0.3873, 0.8944, 0.2236, 1.0),
	vec4(-0.3873, 0.8944, 0.2236, 1.0),
	vec4(-0.4472, 0.8944, 0.0, 1.0),
	vec4(-0.4472, 0.8944, 0.0, 1.0),
	vec4(-0.3873, 0.8944, -0.2236, 1.0),
	vec4(-0.3873, 0.8944, -0.2236, 1.0),
	vec4(-0.2236, 0.8944, -0.3873, 1.0),
	vec4(-0.2236, 0.8944, -0.3873, 1.0),
	vec4(0.0, 0.8944, -0.4472, 1.0),
	vec4(0.0, 0.8944, -0.4472, 1.0),
	vec4(0.2236, 0.8944, -0.3873, 1.0),
	vec4(0.2236, 0.8944, -0.3873, 1.0),
	vec4(-1.0, -0.0, -0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-0.866, -0.0, -0.5, 1.0),
	vec4(-0.866, 0.0, -0.5, 1.0),
	vec4(-0.5, -0.0, -0.866, 1.0),
	vec4(-0.5, 0.0, -0.866, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.5, 0.0, -0.866, 1.0),
	vec4(0.5, 0.0, -0.866, 1.0),
	vec4(0.866, 0.0, -0.5, 1.0),
	vec4(0.866, 0.0, -0.5, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, -0.7071, -0.7071, 1.0),
	vec4(-0.0, -0.7071, -0.7071, 1.0),
	vec4(0.7071, -0.7071, 0.0, 1.0),
	vec4(0.7071, -0.7071, 0.0, 1.0),
	vec4(-0.3536, -0.7071, -0.6124, 1.0),
	vec4(-0.3536, -0.7071, -0.6124, 1.0),
	vec4(-0.6124, -0.7071, -0.3536, 1.0),
	vec4(-0.6124, -0.7071, -0.3536, 1.0),
	vec4(-0.7071, -0.7071, 0.0, 1.0),
	vec4(-0.7071, -0.7071, 0.0, 1.0),
	vec4(-0.6124, -0.7071, 0.3536, 1.0),
	vec4(-0.6124, -0.7071, 0.3536, 1.0),
	vec4(-0.3536, -0.7071, 0.6124, 1.0),
	vec4(-0.3536, -0.7071, 0.6124, 1.0),
	vec4(0.0, -0.7071, 0.7071, 1.0),
	vec4(0.0, -0.7071, 0.7071, 1.0),
	vec4(0.3536, -0.7071, 0.6124, 1.0),
	vec4(0.3536, -0.7071, 0.6124, 1.0),
	vec4(0.6124, -0.7071, 0.3536, 1.0),
	vec4(0.6124, -0.7071, 0.3536, 1.0),
	vec4(0.6124, -0.7071, -0.3536, 1.0),
	vec4(0.6124, -0.7071, -0.3536, 1.0),
	vec4(0.3536, -0.7071, -0.6124, 1.0),
	vec4(0.3536, -0.7071, -0.6124, 1.0),
	vec4(-0.866, 0.0, 0.5, 1.0),
	vec4(-0.866, 0.0, 0.5, 1.0),
	vec4(-0.5, 0.0, 0.866, 1.0),
	vec4(-0.5, 0.0, 0.866, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(0.5, 0.0, 0.866, 1.0),
	vec4(0.5, 0.0, 0.866, 1.0),
	vec4(0.866, 0.0, 0.5, 1.0),
	vec4(0.866, 0.0, 0.5, 1.0),
	vec4(1.0, 0.0, -0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(-0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(-0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(-0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0)
];
var palmo_r_texcoords = [
	vec2(0.2356, 0.7162),
	vec2(0.2606, 0.8271),
	vec2(0.3127, 0.7997),
	vec2(0.3442, 0.75),
	vec2(0.3465, 0.6912),
	vec2(0.3191, 0.6391),
	vec2(0.2694, 0.6077),
	vec2(0.2106, 0.6053),
	vec2(0.1585, 0.6327),
	vec2(0.127, 0.6824),
	vec2(0.1246, 0.7411),
	vec2(0.152, 0.7932),
	vec2(0.2017, 0.8247),
	vec2(0.101, 0.5703),
	vec2(0.1919, 0.5222),
	vec2(0.0717, 0.5386),
	vec2(0.1827, 0.4804),
	vec2(0.2949, 0.5261),
	vec2(0.3076, 0.4855),
	vec2(0.3815, 0.5816),
	vec2(0.4132, 0.5524),
	vec2(0.4296, 0.6725),
	vec2(0.471, 0.6631),
	vec2(0.4252, 0.7752),
	vec2(0.4661, 0.7877),
	vec2(0.3702, 0.8621),
	vec2(0.3995, 0.8938),
	vec2(0.2792, 0.9102),
	vec2(0.2885, 0.9521),
	vec2(0.1636, 0.947),
	vec2(0.1763, 0.9063),
	vec2(0.0578, 0.8799),
	vec2(0.0896, 0.8508),
	vec2(0.0001, 0.7689),
	vec2(0.0419, 0.7597),
	vec2(0.0052, 0.6444),
	vec2(0.0458, 0.657),
	vec2(0.6489, 0.9957),
	vec2(0.7956, 0.9999),
	vec2(0.6684, 0.9376),
	vec2(0.7826, 0.9397),
	vec2(0.9246, 0.929),
	vec2(0.8827, 0.8836),
	vec2(0.9999, 0.8024),
	vec2(0.9407, 0.7845),
	vec2(0.9999, 0.6546),
	vec2(0.9398, 0.6696),
	vec2(0.924, 0.5277),
	vec2(0.8801, 0.5712),
	vec2(0.7946, 0.458),
	vec2(0.7791, 0.5172),
	vec2(0.8178, 0.702),
	vec2(0.8195, 0.7495),
	vec2(0.6659, 0.5218),
	vec2(0.7481, 0.6398),
	vec2(0.6992, 0.6406),
	vec2(0.7955, 0.7909),
	vec2(0.7528, 0.8151),
	vec2(0.7031, 0.8159),
	vec2(0.6583, 0.7935),
	vec2(0.5729, 0.878),
	vec2(0.5213, 0.7749),
	vec2(0.6285, 0.7575),
	vec2(0.5235, 0.6789),
	vec2(0.631, 0.7046),
	vec2(0.6287, 0.7562),
	vec2(0.5726, 0.582),
	vec2(0.6557, 0.6648),
	vec2(0.6307, 0.7031),
	vec2(0.7914, 0.662),
	vec2(0.5269, 0.9165),
	vec2(0.5308, 0.5419),
	vec2(0.6495, 0.464),
	vec2(0.6994, 0.6415),
	vec2(0.7033, 0.815),
	vec2(0.7478, 0.6406),
	vec2(0.7526, 0.8142),
	vec2(0.7908, 0.6626),
	vec2(0.7949, 0.7903),
	vec2(0.817, 0.7022),
	vec2(0.8187, 0.7492),
	vec2(0.6589, 0.7928),
	vec2(0.6564, 0.6655)
];
function palmo_r_triangles() {
	triangle(palmo_r, 30, 15, 19, palmo_r_normals, 0, palmo_r_texcoords, 0, 1, 2);
	triangle(palmo_r, 30, 19, 29, palmo_r_normals, 1, palmo_r_texcoords, 0, 2, 3);
	triangle(palmo_r, 30, 29, 32, palmo_r_normals, 2, palmo_r_texcoords, 0, 3, 4);
	triangle(palmo_r, 30, 32, 42, palmo_r_normals, 3, palmo_r_texcoords, 0, 4, 5);
	triangle(palmo_r, 30, 42, 46, palmo_r_normals, 4, palmo_r_texcoords, 0, 5, 6);
	triangle(palmo_r, 30, 46, 45, palmo_r_normals, 5, palmo_r_texcoords, 0, 6, 7);
	triangle(palmo_r, 30, 45, 41, palmo_r_normals, 6, palmo_r_texcoords, 0, 7, 8);
	triangle(palmo_r, 30, 41, 31, palmo_r_normals, 7, palmo_r_texcoords, 0, 8, 9);
	triangle(palmo_r, 30, 31, 28, palmo_r_normals, 8, palmo_r_texcoords, 0, 9, 10);
	triangle(palmo_r, 30, 28, 18, palmo_r_normals, 9, palmo_r_texcoords, 0, 10, 11);
	triangle(palmo_r, 30, 18, 14, palmo_r_normals, 10, palmo_r_texcoords, 0, 11, 12);
	triangle(palmo_r, 30, 14, 15, palmo_r_normals, 11, palmo_r_texcoords, 0, 12, 1);
	triangle(palmo_r, 49, 55, 53, palmo_r_normals, 12, palmo_r_texcoords, 13, 14, 15);
	triangle(palmo_r, 53, 55, 59, palmo_r_normals, 13, palmo_r_texcoords, 15, 14, 16);
	triangle(palmo_r, 55, 56, 59, palmo_r_normals, 14, palmo_r_texcoords, 14, 17, 16);
	triangle(palmo_r, 59, 56, 60, palmo_r_normals, 15, palmo_r_texcoords, 16, 17, 18);
	triangle(palmo_r, 50, 54, 56, palmo_r_normals, 16, palmo_r_texcoords, 19, 20, 17);
	triangle(palmo_r, 56, 54, 60, palmo_r_normals, 17, palmo_r_texcoords, 17, 20, 18);
	triangle(palmo_r, 50, 36, 54, palmo_r_normals, 18, palmo_r_texcoords, 19, 21, 20);
	triangle(palmo_r, 54, 36, 40, palmo_r_normals, 19, palmo_r_texcoords, 20, 21, 22);
	triangle(palmo_r, 25, 23, 36, palmo_r_normals, 20, palmo_r_texcoords, 23, 24, 21);
	triangle(palmo_r, 36, 23, 40, palmo_r_normals, 21, palmo_r_texcoords, 21, 24, 22);
	triangle(palmo_r, 11, 9, 25, palmo_r_normals, 22, palmo_r_texcoords, 25, 26, 23);
	triangle(palmo_r, 25, 9, 23, palmo_r_normals, 23, palmo_r_texcoords, 23, 26, 24);
	triangle(palmo_r, 11, 5, 9, palmo_r_normals, 24, palmo_r_texcoords, 25, 27, 26);
	triangle(palmo_r, 9, 5, 3, palmo_r_normals, 25, palmo_r_texcoords, 26, 27, 28);
	triangle(palmo_r, 2, 3, 4, palmo_r_normals, 26, palmo_r_texcoords, 29, 28, 30);
	triangle(palmo_r, 4, 3, 5, palmo_r_normals, 27, palmo_r_texcoords, 30, 28, 27);
	triangle(palmo_r, 2, 4, 8, palmo_r_normals, 28, palmo_r_texcoords, 29, 30, 31);
	triangle(palmo_r, 8, 4, 10, palmo_r_normals, 29, palmo_r_texcoords, 31, 30, 32);
	triangle(palmo_r, 22, 8, 24, palmo_r_normals, 30, palmo_r_texcoords, 33, 31, 34);
	triangle(palmo_r, 24, 8, 10, palmo_r_normals, 31, palmo_r_texcoords, 34, 31, 32);
	triangle(palmo_r, 39, 22, 35, palmo_r_normals, 32, palmo_r_texcoords, 35, 33, 36);
	triangle(palmo_r, 35, 22, 24, palmo_r_normals, 33, palmo_r_texcoords, 36, 33, 34);
	triangle(palmo_r, 39, 35, 53, palmo_r_normals, 34, palmo_r_texcoords, 35, 36, 15);
	triangle(palmo_r, 53, 35, 49, palmo_r_normals, 35, palmo_r_texcoords, 15, 36, 13);
	triangle(palmo_r, 3, 2, 1, palmo_r_normals, 36, palmo_r_texcoords, 37, 38, 39);
	triangle(palmo_r, 1, 2, 0, palmo_r_normals, 37, palmo_r_texcoords, 39, 38, 40);
	triangle(palmo_r, 2, 8, 0, palmo_r_normals, 38, palmo_r_texcoords, 38, 41, 40);
	triangle(palmo_r, 0, 8, 6, palmo_r_normals, 39, palmo_r_texcoords, 40, 41, 42);
	triangle(palmo_r, 8, 22, 6, palmo_r_normals, 40, palmo_r_texcoords, 41, 43, 42);
	triangle(palmo_r, 6, 22, 20, palmo_r_normals, 41, palmo_r_texcoords, 42, 43, 44);
	triangle(palmo_r, 22, 39, 20, palmo_r_normals, 42, palmo_r_texcoords, 43, 45, 44);
	triangle(palmo_r, 20, 39, 37, palmo_r_normals, 43, palmo_r_texcoords, 44, 45, 46);
	triangle(palmo_r, 39, 53, 37, palmo_r_normals, 44, palmo_r_texcoords, 45, 47, 46);
	triangle(palmo_r, 37, 53, 51, palmo_r_normals, 45, palmo_r_texcoords, 46, 47, 48);
	triangle(palmo_r, 53, 59, 51, palmo_r_normals, 46, palmo_r_texcoords, 47, 49, 48);
	triangle(palmo_r, 51, 59, 57, palmo_r_normals, 47, palmo_r_texcoords, 48, 49, 50);
	triangle(palmo_r, 15, 11, 19, palmo_r_normals, 48, palmo_r_texcoords, 1, 25, 2);
	triangle(palmo_r, 19, 11, 25, palmo_r_normals, 49, palmo_r_texcoords, 2, 25, 23);
	triangle(palmo_r, 19, 25, 29, palmo_r_normals, 50, palmo_r_texcoords, 2, 23, 3);
	triangle(palmo_r, 29, 25, 32, palmo_r_normals, 51, palmo_r_texcoords, 3, 23, 4);
	triangle(palmo_r, 32, 25, 36, palmo_r_normals, 52, palmo_r_texcoords, 4, 23, 21);
	triangle(palmo_r, 32, 36, 42, palmo_r_normals, 53, palmo_r_texcoords, 4, 21, 5);
	triangle(palmo_r, 42, 36, 50, palmo_r_normals, 54, palmo_r_texcoords, 5, 21, 19);
	triangle(palmo_r, 42, 50, 46, palmo_r_normals, 55, palmo_r_texcoords, 5, 19, 6);
	triangle(palmo_r, 46, 50, 56, palmo_r_normals, 56, palmo_r_texcoords, 6, 19, 17);
	triangle(palmo_r, 46, 56, 55, palmo_r_normals, 57, palmo_r_texcoords, 6, 17, 14);
	triangle(palmo_r, 11, 15, 5, palmo_r_normals, 58, palmo_r_texcoords, 25, 1, 27);
	triangle(palmo_r, 5, 15, 14, palmo_r_normals, 59, palmo_r_texcoords, 27, 1, 12);
	triangle(palmo_r, 5, 14, 4, palmo_r_normals, 60, palmo_r_texcoords, 27, 12, 30);
	triangle(palmo_r, 4, 14, 10, palmo_r_normals, 61, palmo_r_texcoords, 30, 12, 32);
	triangle(palmo_r, 10, 14, 18, palmo_r_normals, 62, palmo_r_texcoords, 32, 12, 11);
	triangle(palmo_r, 10, 18, 24, palmo_r_normals, 63, palmo_r_texcoords, 32, 11, 34);
	triangle(palmo_r, 24, 18, 28, palmo_r_normals, 64, palmo_r_texcoords, 34, 11, 10);
	triangle(palmo_r, 24, 28, 31, palmo_r_normals, 65, palmo_r_texcoords, 34, 10, 9);
	triangle(palmo_r, 24, 31, 35, palmo_r_normals, 66, palmo_r_texcoords, 34, 9, 36);
	triangle(palmo_r, 35, 31, 41, palmo_r_normals, 67, palmo_r_texcoords, 36, 9, 8);
	triangle(palmo_r, 35, 41, 49, palmo_r_normals, 68, palmo_r_texcoords, 36, 8, 13);
	triangle(palmo_r, 49, 41, 45, palmo_r_normals, 69, palmo_r_texcoords, 13, 8, 7);
	triangle(palmo_r, 49, 45, 55, palmo_r_normals, 70, palmo_r_texcoords, 13, 7, 14);
	triangle(palmo_r, 55, 45, 46, palmo_r_normals, 71, palmo_r_texcoords, 14, 7, 6);
	triangle(palmo_r, 33, 26, 37, palmo_r_normals, 72, palmo_r_texcoords, 51, 52, 46);
	triangle(palmo_r, 37, 26, 20, palmo_r_normals, 73, palmo_r_texcoords, 46, 52, 44);
	triangle(palmo_r, 57, 58, 47, palmo_r_normals, 74, palmo_r_texcoords, 50, 53, 54);
	triangle(palmo_r, 47, 58, 48, palmo_r_normals, 75, palmo_r_texcoords, 54, 53, 55);
	triangle(palmo_r, 26, 16, 20, palmo_r_normals, 76, palmo_r_texcoords, 52, 56, 44);
	triangle(palmo_r, 20, 16, 6, palmo_r_normals, 77, palmo_r_texcoords, 44, 56, 42);
	triangle(palmo_r, 16, 12, 6, palmo_r_normals, 78, palmo_r_texcoords, 56, 57, 42);
	triangle(palmo_r, 6, 12, 0, palmo_r_normals, 79, palmo_r_texcoords, 42, 57, 40);
	triangle(palmo_r, 12, 13, 0, palmo_r_normals, 80, palmo_r_texcoords, 57, 58, 40);
	triangle(palmo_r, 0, 13, 1, palmo_r_normals, 81, palmo_r_texcoords, 40, 58, 39);
	triangle(palmo_r, 13, 17, 1, palmo_r_normals, 82, palmo_r_texcoords, 58, 59, 39);
	triangle(palmo_r, 1, 17, 7, palmo_r_normals, 83, palmo_r_texcoords, 39, 59, 60);
	triangle(palmo_r, 21, 7, 27, palmo_r_normals, 84, palmo_r_texcoords, 61, 60, 62);
	triangle(palmo_r, 27, 7, 17, palmo_r_normals, 85, palmo_r_texcoords, 62, 60, 59);
	triangle(palmo_r, 38, 21, 34, palmo_r_normals, 86, palmo_r_texcoords, 63, 61, 64);
	triangle(palmo_r, 34, 21, 27, palmo_r_normals, 87, palmo_r_texcoords, 64, 61, 65);
	triangle(palmo_r, 52, 38, 44, palmo_r_normals, 88, palmo_r_texcoords, 66, 63, 67);
	triangle(palmo_r, 44, 38, 34, palmo_r_normals, 89, palmo_r_texcoords, 67, 63, 68);
	triangle(palmo_r, 58, 52, 48, palmo_r_normals, 90, palmo_r_texcoords, 53, 66, 55);
	triangle(palmo_r, 48, 52, 44, palmo_r_normals, 91, palmo_r_texcoords, 55, 66, 67);
	triangle(palmo_r, 51, 57, 43, palmo_r_normals, 92, palmo_r_texcoords, 48, 50, 69);
	triangle(palmo_r, 43, 57, 47, palmo_r_normals, 93, palmo_r_texcoords, 69, 50, 54);
	triangle(palmo_r, 37, 51, 33, palmo_r_normals, 94, palmo_r_texcoords, 46, 48, 51);
	triangle(palmo_r, 33, 51, 43, palmo_r_normals, 95, palmo_r_texcoords, 51, 48, 69);
	triangle(palmo_r, 9, 3, 7, palmo_r_normals, 96, palmo_r_texcoords, 70, 37, 60);
	triangle(palmo_r, 7, 3, 1, palmo_r_normals, 97, palmo_r_texcoords, 60, 37, 39);
	triangle(palmo_r, 23, 9, 21, palmo_r_normals, 98, palmo_r_texcoords, 24, 70, 61);
	triangle(palmo_r, 21, 9, 7, palmo_r_normals, 99, palmo_r_texcoords, 61, 70, 60);
	triangle(palmo_r, 40, 23, 38, palmo_r_normals, 100, palmo_r_texcoords, 22, 24, 63);
	triangle(palmo_r, 38, 23, 21, palmo_r_normals, 101, palmo_r_texcoords, 63, 24, 61);
	triangle(palmo_r, 54, 40, 52, palmo_r_normals, 102, palmo_r_texcoords, 71, 22, 66);
	triangle(palmo_r, 52, 40, 38, palmo_r_normals, 103, palmo_r_texcoords, 66, 22, 63);
	triangle(palmo_r, 60, 54, 58, palmo_r_normals, 104, palmo_r_texcoords, 72, 71, 53);
	triangle(palmo_r, 58, 54, 52, palmo_r_normals, 105, palmo_r_texcoords, 53, 71, 66);
	triangle(palmo_r, 59, 60, 57, palmo_r_normals, 106, palmo_r_texcoords, 49, 72, 50);
	triangle(palmo_r, 57, 60, 58, palmo_r_normals, 107, palmo_r_texcoords, 50, 72, 53);
	triangle(palmo_r, 48, 13, 47, palmo_r_normals, 108, palmo_r_texcoords, 73, 74, 75);
	triangle(palmo_r, 47, 13, 12, palmo_r_normals, 109, palmo_r_texcoords, 75, 74, 76);
	triangle(palmo_r, 47, 12, 43, palmo_r_normals, 110, palmo_r_texcoords, 75, 76, 77);
	triangle(palmo_r, 43, 12, 16, palmo_r_normals, 111, palmo_r_texcoords, 77, 76, 78);
	triangle(palmo_r, 43, 16, 33, palmo_r_normals, 112, palmo_r_texcoords, 77, 78, 79);
	triangle(palmo_r, 33, 16, 26, palmo_r_normals, 113, palmo_r_texcoords, 79, 78, 80);
	triangle(palmo_r, 13, 48, 17, palmo_r_normals, 114, palmo_r_texcoords, 74, 73, 81);
	triangle(palmo_r, 17, 48, 44, palmo_r_normals, 115, palmo_r_texcoords, 81, 73, 82);
	triangle(palmo_r, 17, 44, 27, palmo_r_normals, 116, palmo_r_texcoords, 81, 82, 65);
	triangle(palmo_r, 27, 44, 34, palmo_r_normals, 117, palmo_r_texcoords, 65, 82, 64);
}

// Perno -------------------------------------------

// Palm perno
var perno_p = [
	vec4(-2.25, -4.1187, -2.25, 1.0),
	vec4(-2.25, -4.1187, 2.25, 1.0),
	vec4(-2.25, -2.1187, -2.25, 1.0),
	vec4(-2.25, -2.1187, 2.25, 1.0),
	vec4(-2.25, 0.3881, -1.8322, 1.0),
	vec4(-2.25, 0.3881, 1.8322, 1.0),
	vec4(-2.25, 0.8813, -0.5, 1.0),
	vec4(-2.25, 0.8813, 0.5, 1.0),
	vec4(-1.25, 0.3881, -1.8322, 1.0),
	vec4(-1.25, 0.3881, 1.8322, 1.0),
	vec4(-1.25, 0.8813, -0.5, 1.0),
	vec4(-1.25, 0.8813, 0.5, 1.0),
	vec4(-1.25, -2.1187, -2.25, 1.0),
	vec4(-1.25, -2.1187, 2.25, 1.0),
	vec4(1.25, 0.8813, -0.5, 1.0),
	vec4(1.25, 0.8813, 0.5, 1.0),
	vec4(1.25, -2.1187, -2.25, 1.0),
	vec4(1.25, -2.1187, 2.25, 1.0),
	vec4(1.25, 0.3881, -1.8322, 1.0),
	vec4(1.25, 0.3881, 1.8322, 1.0),
	vec4(2.25, -4.1187, -2.25, 1.0),
	vec4(2.25, -4.1187, 2.25, 1.0),
	vec4(2.25, -2.1187, -2.25, 1.0),
	vec4(2.25, -2.1187, 2.25, 1.0),
	vec4(2.25, 0.3881, -1.8322, 1.0),
	vec4(2.25, 0.3881, 1.8322, 1.0),
	vec4(2.25, 0.8813, -0.5, 1.0),
	vec4(2.25, 0.88, 0.5, 1.0)
];
var perno_p_normals = [
	vec4(-0.0, 0.9378, 0.3472, 1.0),
	vec4(-0.0, 0.9378, 0.3472, 1.0),
	vec4(-0.0, 0.1644, 0.9864, 1.0),
	vec4(0.0, 0.1644, 0.9864, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, -0.0, 0.0, 1.0),
	vec4(-1.0, -0.0, -0.0, 1.0),
	vec4(-1.0, -0.0, 0.0, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(-0.0, 0.9378, 0.3472, 1.0),
	vec4(-0.0, 0.9378, 0.3472, 1.0),
	vec4(-0.0, -0.0, -1.0, 1.0),
	vec4(-0.0, -0.0, -1.0, 1.0),
	vec4(0.0, -0.0, -1.0, 1.0),
	vec4(-0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(-0.0, 0.1644, 0.9864, 1.0),
	vec4(0.0, 0.1644, 0.9864, 1.0),
	vec4(-0.0, 0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(-0.0, 0.0, 1.0, 1.0),
	vec4(-0.0, 0.0, 1.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, -0.0, 0.0, 1.0),
	vec4(-1.0, -0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0)
];
var perno_p_texcoords = [
	vec2(0.3897, 0.9663),
	vec2(0.3686, 0.9094),
	vec2(0.309, 0.9961),
	vec2(0.2879, 0.9393),
	vec2(0.4284, 0.9194),
	vec2(0.4537, 0.7675),
	vec2(0.394, 0.7575),
	vec2(0.5405, 0.7276),
	vec2(0.6212, 0.7575),
	vec2(0.5151, 0.5757),
	vec2(0.6818, 0.7575),
	vec2(0.7625, 0.7276),
	vec2(0.7878, 0.5757),
	vec2(0.2273, 0.9393),
	vec2(0.1466, 0.9094),
	vec2(0.2063, 0.9961),
	vec2(0.1256, 0.9663),
	vec2(0.0868, 0.9194),
	vec2(0.0615, 0.7675),
	vec2(0.1213, 0.7575),
	vec2(0.2063, 0.0039),
	vec2(0.1256, 0.0337),
	vec2(0.2273, 0.0607),
	vec2(0.1466, 0.0906),
	vec2(0.7878, 0.4243),
	vec2(0.7625, 0.2724),
	vec2(0.5405, 0.2724),
	vec2(0.6818, 0.2425),
	vec2(0.6212, 0.2425),
	vec2(0.5151, 0.4243),
	vec2(0.2879, 0.0607),
	vec2(0.2273, 0.0001),
	vec2(0.2879, 0.0001),
	vec2(0.3686, 0.0906),
	vec2(0.3897, 0.0337),
	vec2(0.309, 0.0039),
	vec2(0.0001, 0.6363),
	vec2(0.1213, 0.6363),
	vec2(0.0001, 0.5757),
	vec2(0.0001, 0.4243),
	vec2(0.1213, 0.3637),
	vec2(0.0001, 0.3637),
	vec2(0.0868, 0.0806),
	vec2(0.1213, 0.2425),
	vec2(0.0615, 0.2325),
	vec2(0.394, 0.2425),
	vec2(0.4284, 0.0806),
	vec2(0.4537, 0.2325),
	vec2(0.5151, 0.3637),
	vec2(0.394, 0.3637),
	vec2(0.394, 0.6363),
	vec2(0.5151, 0.6363),
	vec2(0.2879, 0.9999),
	vec2(0.2273, 0.9999)
];
function perno_p_triangles() {
	triangle(perno_p, 19, 25, 15, perno_p_normals, 0, perno_p_texcoords, 0, 1, 2);
	triangle(perno_p, 15, 25, 27, perno_p_normals, 1, perno_p_texcoords, 2, 1, 3);
	triangle(perno_p, 19, 17, 25, perno_p_normals, 2, perno_p_texcoords, 4, 5, 1);
	triangle(perno_p, 25, 17, 23, perno_p_normals, 3, perno_p_texcoords, 1, 5, 6);
	triangle(perno_p, 19, 15, 17, perno_p_normals, 4, perno_p_texcoords, 7, 8, 9);
	triangle(perno_p, 17, 15, 14, perno_p_normals, 5, perno_p_texcoords, 9, 8, 10);
	triangle(perno_p, 17, 14, 18, perno_p_normals, 6, perno_p_texcoords, 9, 10, 11);
	triangle(perno_p, 18, 16, 17, perno_p_normals, 7, perno_p_texcoords, 11, 12, 9);
	triangle(perno_p, 26, 24, 14, perno_p_normals, 8, perno_p_texcoords, 13, 14, 15);
	triangle(perno_p, 14, 24, 18, perno_p_normals, 9, perno_p_texcoords, 15, 14, 16);
	triangle(perno_p, 18, 24, 16, perno_p_normals, 10, perno_p_texcoords, 17, 14, 18);
	triangle(perno_p, 16, 24, 22, perno_p_normals, 11, perno_p_texcoords, 18, 14, 19);
	triangle(perno_p, 10, 8, 6, perno_p_normals, 12, perno_p_texcoords, 20, 21, 22);
	triangle(perno_p, 6, 8, 4, perno_p_normals, 13, perno_p_texcoords, 22, 21, 23);
	triangle(perno_p, 12, 8, 9, perno_p_normals, 14, perno_p_texcoords, 24, 25, 26);
	triangle(perno_p, 9, 8, 10, perno_p_normals, 15, perno_p_texcoords, 26, 25, 27);
	triangle(perno_p, 9, 10, 11, perno_p_normals, 16, perno_p_texcoords, 26, 27, 28);
	triangle(perno_p, 9, 13, 12, perno_p_normals, 17, perno_p_texcoords, 26, 29, 24);
	triangle(perno_p, 6, 7, 10, perno_p_normals, 18, perno_p_texcoords, 22, 30, 31);
	triangle(perno_p, 10, 7, 11, perno_p_normals, 19, perno_p_texcoords, 31, 30, 32);
	triangle(perno_p, 5, 9, 7, perno_p_normals, 20, perno_p_texcoords, 33, 34, 30);
	triangle(perno_p, 7, 9, 11, perno_p_normals, 21, perno_p_texcoords, 30, 34, 35);
	triangle(perno_p, 22, 20, 16, perno_p_normals, 22, perno_p_texcoords, 36, 37, 38);
	triangle(perno_p, 16, 20, 12, perno_p_normals, 23, perno_p_texcoords, 38, 37, 39);
	triangle(perno_p, 12, 20, 0, perno_p_normals, 24, perno_p_texcoords, 39, 37, 40);
	triangle(perno_p, 12, 0, 2, perno_p_normals, 25, perno_p_texcoords, 39, 40, 41);
	triangle(perno_p, 4, 8, 2, perno_p_normals, 26, perno_p_texcoords, 23, 42, 43);
	triangle(perno_p, 2, 8, 12, perno_p_normals, 27, perno_p_texcoords, 43, 42, 44);
	triangle(perno_p, 5, 3, 9, perno_p_normals, 28, perno_p_texcoords, 33, 45, 46);
	triangle(perno_p, 9, 3, 13, perno_p_normals, 29, perno_p_texcoords, 46, 45, 47);
	triangle(perno_p, 3, 1, 13, perno_p_normals, 30, perno_p_texcoords, 48, 49, 29);
	triangle(perno_p, 13, 1, 21, perno_p_normals, 31, perno_p_texcoords, 29, 49, 50);
	triangle(perno_p, 13, 21, 17, perno_p_normals, 32, perno_p_texcoords, 29, 50, 9);
	triangle(perno_p, 17, 21, 23, perno_p_normals, 33, perno_p_texcoords, 9, 50, 51);
	triangle(perno_p, 27, 26, 15, perno_p_normals, 34, perno_p_texcoords, 3, 13, 52);
	triangle(perno_p, 15, 26, 14, perno_p_normals, 35, perno_p_texcoords, 52, 13, 53);
	triangle(perno_p, 25, 23, 27, perno_p_normals, 36, perno_p_texcoords, 1, 6, 3);
	triangle(perno_p, 27, 23, 22, perno_p_normals, 37, perno_p_texcoords, 3, 6, 19);
	triangle(perno_p, 27, 22, 26, perno_p_normals, 38, perno_p_texcoords, 3, 19, 13);
	triangle(perno_p, 26, 22, 24, perno_p_normals, 39, perno_p_texcoords, 13, 19, 14);
	triangle(perno_p, 23, 21, 22, perno_p_normals, 40, perno_p_texcoords, 6, 50, 19);
	triangle(perno_p, 22, 21, 20, perno_p_normals, 41, perno_p_texcoords, 19, 50, 37);
	triangle(perno_p, 4, 2, 6, perno_p_normals, 42, perno_p_texcoords, 23, 43, 22);
	triangle(perno_p, 6, 2, 3, perno_p_normals, 43, perno_p_texcoords, 22, 43, 45);
	triangle(perno_p, 6, 3, 7, perno_p_normals, 44, perno_p_texcoords, 22, 45, 30);
	triangle(perno_p, 7, 3, 5, perno_p_normals, 45, perno_p_texcoords, 30, 45, 33);
	triangle(perno_p, 0, 1, 2, perno_p_normals, 46, perno_p_texcoords, 40, 49, 43);
	triangle(perno_p, 2, 1, 3, perno_p_normals, 47, perno_p_texcoords, 43, 49, 45);
	triangle(perno_p, 16, 12, 17, perno_p_normals, 48, perno_p_texcoords, 12, 24, 9);
	triangle(perno_p, 17, 12, 13, perno_p_normals, 49, perno_p_texcoords, 9, 24, 29);
	triangle(perno_p, 1, 0, 21, perno_p_normals, 50, perno_p_texcoords, 49, 40, 50);
	triangle(perno_p, 21, 0, 20, perno_p_normals, 51, perno_p_texcoords, 50, 40, 37);
}

// Fingers perno
var perno_m = [
	vec4(-2.25, 2.3817, -2.25, 1.0),
	vec4(-2.25, 2.3817, 2.25, 1.0),
	vec4(-2.25, 2.8817, -2.25, 1.0),
	vec4(-2.25, 2.8817, 2.25, 1.0),
	vec4(-1.25, -1.6183, -0.5, 1.0),
	vec4(-1.25, -1.6183, 0.5, 1.0),
	vec4(-1.25, -1.1251, -1.8322, 1.0),
	vec4(-1.25, -1.1251, 1.8322, 1.0),
	vec4(-1.25, 1.3817, -2.25, 1.0),
	vec4(-1.25, 1.3817, 2.25, 1.0),
	vec4(-1.25, 2.3817, -2.25, 1.0),
	vec4(-1.25, 2.3817, 2.25, 1.0),
	vec4(1.25, -1.6183, -0.5, 1.0),
	vec4(1.25, -1.6183, 0.5, 1.0),
	vec4(1.25, -1.1251, -1.8322, 1.0),
	vec4(1.25, -1.1251, 1.8322, 1.0),
	vec4(1.25, 1.3817, -2.25, 1.0),
	vec4(1.25, 1.3817, 2.25, 1.0),
	vec4(1.25, 2.3817, -2.25, 1.0),
	vec4(1.25, 2.3817, 2.25, 1.0),
	vec4(2.25, 2.3817, -2.25, 1.0),
	vec4(2.25, 2.3817, 2.25, 1.0),
	vec4(2.25, 2.8817, -2.25, 1.0),
	vec4(2.25, 2.88, 2.25, 1.0)
];
var perno_m_normals = [
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-1.0, -0.0, -0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(-0.0, 0.0, -1.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(1.0, 0.0, -0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(0.0, -0.9378, -0.3472, 1.0),
	vec4(0.0, -0.9378, -0.3472, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -0.9378, 0.3472, 1.0),
	vec4(0.0, -0.9378, 0.3472, 1.0),
	vec4(-0.0, -0.1644, -0.9864, 1.0),
	vec4(-0.0, -0.1644, -0.9864, 1.0),
	vec4(0.0, -0.1644, 0.9864, 1.0),
	vec4(0.0, -0.1644, 0.9864, 1.0),
	vec4(1.0, -0.0, -0.0, 1.0),
	vec4(1.0, -0.0, 0.0, 1.0),
	vec4(1.0, -0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, -0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(0.0, -0.0, 1.0, 1.0),
	vec4(0.0, -0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(-0.0, 0.0, 1.0, 1.0)
];
var perno_m_texcoords = [
	vec2(0.454, 0.6176),
	vec2(0.239, 0.6176),
	vec2(0.454, 0.8327),
	vec2(0.239, 0.8327),
	vec2(0.454, 0.8566),
	vec2(0.239, 0.8566),
	vec2(0.2151, 0.8327),
	vec2(0.2151, 0.7849),
	vec2(0.2151, 0.6654),
	vec2(0.2151, 0.6176),
	vec2(0.9521, 0.6654),
	vec2(0.9521, 0.7849),
	vec2(0.9999, 0.6654),
	vec2(0.9999, 0.7849),
	vec2(0.0001, 0.6176),
	vec2(0.0001, 0.6654),
	vec2(0.0001, 0.8327),
	vec2(0.0001, 0.7849),
	vec2(0.239, 0.5938),
	vec2(0.454, 0.5938),
	vec2(0.7628, 0.7849),
	vec2(0.8307, 0.7849),
	vec2(0.7628, 0.6654),
	vec2(0.8307, 0.6654),
	vec2(0.8324, 0.8049),
	vec2(0.8088, 0.8685),
	vec2(0.9521, 0.9999),
	vec2(0.9999, 0.9999),
	vec2(0.8088, 0.9163),
	vec2(0.8324, 0.98),
	vec2(0.715, 0.7849),
	vec2(0.715, 0.6654),
	vec2(0.6472, 0.6654),
	vec2(0.6472, 0.7849),
	vec2(0.5257, 0.7849),
	vec2(0.5257, 0.6654),
	vec2(0.8324, 0.6455),
	vec2(0.8088, 0.5818),
	vec2(0.8088, 0.534),
	vec2(0.9521, 0.4504),
	vec2(0.8324, 0.4704),
	vec2(0.9999, 0.4504),
	vec2(0.4779, 0.6176),
	vec2(0.4779, 0.6654),
	vec2(0.4779, 0.7849),
	vec2(0.4779, 0.8327)
];
function perno_m_triangles() {
	triangle(perno_m, 23, 22, 3, perno_m_normals, 0, perno_m_texcoords, 0, 1, 2);
	triangle(perno_m, 3, 22, 2, perno_m_normals, 1, perno_m_texcoords, 2, 1, 3);
	triangle(perno_m, 3, 2, 1, perno_m_normals, 2, perno_m_texcoords, 2, 3, 4);
	triangle(perno_m, 1, 2, 0, perno_m_normals, 3, perno_m_texcoords, 4, 3, 5);
	triangle(perno_m, 0, 2, 10, perno_m_normals, 4, perno_m_texcoords, 6, 3, 7);
	triangle(perno_m, 10, 2, 22, perno_m_normals, 5, perno_m_texcoords, 7, 3, 1);
	triangle(perno_m, 10, 22, 18, perno_m_normals, 6, perno_m_texcoords, 7, 1, 8);
	triangle(perno_m, 18, 22, 20, perno_m_normals, 7, perno_m_texcoords, 8, 1, 9);
	triangle(perno_m, 16, 8, 18, perno_m_normals, 8, perno_m_texcoords, 10, 11, 12);
	triangle(perno_m, 18, 8, 10, perno_m_normals, 9, perno_m_texcoords, 12, 11, 13);
	triangle(perno_m, 20, 21, 18, perno_m_normals, 10, perno_m_texcoords, 9, 14, 8);
	triangle(perno_m, 18, 21, 19, perno_m_normals, 11, perno_m_texcoords, 8, 14, 15);
	triangle(perno_m, 1, 0, 11, perno_m_normals, 12, perno_m_texcoords, 16, 6, 17);
	triangle(perno_m, 11, 0, 10, perno_m_normals, 13, perno_m_texcoords, 17, 6, 7);
	triangle(perno_m, 22, 23, 20, perno_m_normals, 14, perno_m_texcoords, 1, 0, 18);
	triangle(perno_m, 20, 23, 21, perno_m_normals, 15, perno_m_texcoords, 18, 0, 19);
	triangle(perno_m, 4, 6, 12, perno_m_normals, 16, perno_m_texcoords, 20, 21, 22);
	triangle(perno_m, 12, 6, 14, perno_m_normals, 17, perno_m_texcoords, 22, 21, 23);
	triangle(perno_m, 6, 4, 8, perno_m_normals, 18, perno_m_texcoords, 24, 25, 11);
	triangle(perno_m, 8, 4, 9, perno_m_normals, 19, perno_m_texcoords, 11, 25, 26);
	triangle(perno_m, 8, 9, 10, perno_m_normals, 20, perno_m_texcoords, 11, 26, 13);
	triangle(perno_m, 10, 9, 11, perno_m_normals, 21, perno_m_texcoords, 13, 26, 27);
	triangle(perno_m, 4, 5, 9, perno_m_normals, 22, perno_m_texcoords, 25, 28, 26);
	triangle(perno_m, 9, 5, 7, perno_m_normals, 23, perno_m_texcoords, 26, 28, 29);
	triangle(perno_m, 4, 12, 5, perno_m_normals, 24, perno_m_texcoords, 20, 22, 30);
	triangle(perno_m, 5, 12, 13, perno_m_normals, 25, perno_m_texcoords, 30, 22, 31);
	triangle(perno_m, 13, 15, 5, perno_m_normals, 26, perno_m_texcoords, 31, 32, 30);
	triangle(perno_m, 5, 15, 7, perno_m_normals, 27, perno_m_texcoords, 30, 32, 33);
	triangle(perno_m, 14, 6, 16, perno_m_normals, 28, perno_m_texcoords, 23, 21, 10);
	triangle(perno_m, 16, 6, 8, perno_m_normals, 29, perno_m_texcoords, 10, 21, 11);
	triangle(perno_m, 7, 15, 9, perno_m_normals, 30, perno_m_texcoords, 33, 32, 34);
	triangle(perno_m, 9, 15, 17, perno_m_normals, 31, perno_m_texcoords, 34, 32, 35);
	triangle(perno_m, 14, 16, 12, perno_m_normals, 32, perno_m_texcoords, 36, 10, 37);
	triangle(perno_m, 12, 16, 13, perno_m_normals, 33, perno_m_texcoords, 37, 10, 38);
	triangle(perno_m, 13, 16, 17, perno_m_normals, 34, perno_m_texcoords, 38, 10, 39);
	triangle(perno_m, 13, 17, 15, perno_m_normals, 35, perno_m_texcoords, 38, 39, 40);
	triangle(perno_m, 18, 19, 16, perno_m_normals, 36, perno_m_texcoords, 12, 41, 10);
	triangle(perno_m, 16, 19, 17, perno_m_normals, 37, perno_m_texcoords, 10, 41, 39);
	triangle(perno_m, 21, 23, 19, perno_m_normals, 38, perno_m_texcoords, 42, 0, 43);
	triangle(perno_m, 19, 23, 3, perno_m_normals, 39, perno_m_texcoords, 43, 0, 2);
	triangle(perno_m, 19, 3, 11, perno_m_normals, 40, perno_m_texcoords, 43, 2, 44);
	triangle(perno_m, 11, 3, 1, perno_m_normals, 41, perno_m_texcoords, 44, 2, 45);
	triangle(perno_m, 9, 17, 11, perno_m_normals, 42, perno_m_texcoords, 34, 35, 44);
	triangle(perno_m, 11, 17, 19, perno_m_normals, 43, perno_m_texcoords, 44, 35, 43);
}

var perno_f = [
	vec4(-2.25, 7.00, -2.25, 1.0),
	vec4(-2.25, 7.00, 2.25, 1.0),
	vec4(-2.25, 7.50, -2.25, 1.0),
	vec4(-2.25, 7.50, 2.25, 1.0),
	vec4(-2.25, 10.0068, -1.8322, 1.0),
	vec4(-2.25, 10.0068, 1.8322, 1.0),
	vec4(-2.25, 10.50, -0.5, 1.0),
	vec4(-2.25, 10.50, 0.5, 1.0),
	vec4(-1.25, 7.50, -2.25, 1.0),
	vec4(-1.25, 7.50, 2.25, 1.0),
	vec4(-1.25, 10.0068, -1.8322, 1.0),
	vec4(-1.25, 10.0068, 1.8322, 1.0),
	vec4(-1.25, 10.50, -0.5, 1.0),
	vec4(-1.25, 10.50, 0.5, 1.0),
	vec4(1.25, 7.50, -2.25, 1.0),
	vec4(1.25, 7.50, 2.25, 1.0),
	vec4(1.25, 10.0068, -1.8322, 1.0),
	vec4(1.25, 10.0068, 1.8322, 1.0),
	vec4(1.25, 10.50, -0.5, 1.0),
	vec4(1.25, 10.50, 0.5, 1.0),
	vec4(2.25, 7.00, -2.25, 1.0),
	vec4(2.25, 7.00, 2.25, 1.0),
	vec4(2.25, 7.50, -2.25, 1.0),
	vec4(2.25, 7.50, 2.25, 1.0),
	vec4(2.25, 10.0068, -1.8322, 1.0),
	vec4(2.25, 10.0068, 1.8322, 1.0),
	vec4(2.25, 10.50, -0.5, 1.0),
	vec4(2.25, 10.50, 0.5, 1.0)
];
var perno_f_normals = [
	vec4(-0.0, 0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(-0.0, 0.0, 1.0, 1.0),
	vec4(-0.0, 0.0, 1.0, 1.0),
	vec4(1.0, -0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(-1.0, -0.0, -0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(0.0, 0.9378, -0.3472, 1.0),
	vec4(1.0, 0.0, -0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(1.0, 0.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, -0.0, 1.0),
	vec4(-0.0, 0.9378, 0.3472, 1.0),
	vec4(0.0, 0.9378, 0.3472, 1.0),
	vec4(-0.0, 0.9378, 0.3472, 1.0),
	vec4(0.0, 0.9378, 0.3472, 1.0),
	vec4(0.0, 0.1644, 0.9864, 1.0),
	vec4(0.0, 0.1644, 0.9864, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(0.0, 0.1644, -0.9864, 1.0),
	vec4(0.0, 0.1644, 0.9864, 1.0),
	vec4(0.0, 0.1644, 0.9864, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-1.0, 0.0, 0.0, 1.0),
	vec4(-0.0, -0.0, -1.0, 1.0),
	vec4(0.0, -0.0, -1.0, 1.0),
	vec4(-0.0, 0.0, -1.0, 1.0),
	vec4(-0.0, 0.0, -1.0, 1.0),
	vec4(0.0, -1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0)
];
var perno_f_texcoords = [
	vec2(0.7622, 0.5772),
	vec2(0.7357, 0.5772),
	vec2(0.7622, 0.6301),
	vec2(0.7357, 0.815),
	vec2(0.7622, 0.7622),
	vec2(0.7622, 0.815),
	vec2(0.498, 0.815),
	vec2(0.7357, 0.8414),
	vec2(0.498, 0.8414),
	vec2(0.7137, 0.9739),
	vec2(0.6433, 0.9999),
	vec2(0.5905, 0.9999),
	vec2(0.5201, 0.9739),
	vec2(0.2622, 0.815),
	vec2(0.3373, 0.815),
	vec2(0.2622, 0.7622),
	vec2(0.3373, 0.7622),
	vec2(0.2094, 0.7622),
	vec2(0.2094, 0.815),
	vec2(0.8546, 0.9207),
	vec2(0.9075, 0.9207),
	vec2(0.9778, 0.8946),
	vec2(0.9999, 0.7622),
	vec2(0.7842, 0.8946),
	vec2(0.2622, 0.6301),
	vec2(0.3373, 0.6301),
	vec2(0.2622, 0.5772),
	vec2(0.3373, 0.5772),
	vec2(0.9778, 0.4976),
	vec2(0.9075, 0.4716),
	vec2(0.9999, 0.6301),
	vec2(0.8546, 0.4716),
	vec2(0.7842, 0.4976),
	vec2(0.2094, 0.5772),
	vec2(0.2094, 0.6301),
	vec2(0.1344, 0.5772),
	vec2(0.1344, 0.6301),
	vec2(0.1344, 0.7622),
	vec2(0.1344, 0.815),
	vec2(0.0001, 0.815),
	vec2(0.0001, 0.7622),
	vec2(0.4716, 0.7622),
	vec2(0.4716, 0.815),
	vec2(0.4716, 0.5772),
	vec2(0.4716, 0.6301),
	vec2(0.0001, 0.6301),
	vec2(0.0001, 0.5772),
	vec2(0.498, 0.5772),
	vec2(0.498, 0.5508),
	vec2(0.7357, 0.5508),
	vec2(0.5201, 0.4184),
	vec2(0.5904, 0.3923),
	vec2(0.6433, 0.3923),
	vec2(0.7137, 0.4184)
];
function perno_f_triangles() {
	triangle(perno_f, 3, 1, 9, perno_f_normals, 0, perno_f_texcoords, 0, 1, 2);
	triangle(perno_f, 9, 1, 21, perno_f_normals, 1, perno_f_texcoords, 2, 1, 3);
	triangle(perno_f, 9, 21, 15, perno_f_normals, 2, perno_f_texcoords, 2, 3, 4);
	triangle(perno_f, 15, 21, 23, perno_f_normals, 3, perno_f_texcoords, 4, 3, 5);
	triangle(perno_f, 21, 20, 23, perno_f_normals, 4, perno_f_texcoords, 3, 6, 7);
	triangle(perno_f, 23, 20, 22, perno_f_normals, 5, perno_f_texcoords, 7, 6, 8);
	triangle(perno_f, 23, 22, 25, perno_f_normals, 6, perno_f_texcoords, 7, 8, 9);
	triangle(perno_f, 25, 22, 27, perno_f_normals, 7, perno_f_texcoords, 9, 8, 10);
	triangle(perno_f, 27, 22, 26, perno_f_normals, 8, perno_f_texcoords, 10, 8, 11);
	triangle(perno_f, 26, 22, 24, perno_f_normals, 9, perno_f_texcoords, 11, 8, 12);
	triangle(perno_f, 26, 24, 18, perno_f_normals, 10, perno_f_texcoords, 13, 14, 15);
	triangle(perno_f, 18, 24, 16, perno_f_normals, 11, perno_f_texcoords, 15, 14, 16);
	triangle(perno_f, 18, 19, 26, perno_f_normals, 12, perno_f_texcoords, 15, 17, 13);
	triangle(perno_f, 26, 19, 27, perno_f_normals, 13, perno_f_texcoords, 13, 17, 18);
	triangle(perno_f, 19, 18, 15, perno_f_normals, 14, perno_f_texcoords, 19, 20, 4);
	triangle(perno_f, 15, 18, 16, perno_f_normals, 15, perno_f_texcoords, 4, 20, 21);
	triangle(perno_f, 15, 16, 14, perno_f_normals, 16, perno_f_texcoords, 4, 21, 22);
	triangle(perno_f, 15, 17, 19, perno_f_normals, 17, perno_f_texcoords, 4, 23, 19);
	triangle(perno_f, 12, 10, 6, perno_f_normals, 18, perno_f_texcoords, 24, 25, 26);
	triangle(perno_f, 6, 10, 4, perno_f_normals, 19, perno_f_texcoords, 26, 25, 27);
	triangle(perno_f, 10, 12, 8, perno_f_normals, 20, perno_f_texcoords, 28, 29, 30);
	triangle(perno_f, 8, 12, 13, perno_f_normals, 21, perno_f_texcoords, 30, 29, 31);
	triangle(perno_f, 8, 13, 11, perno_f_normals, 22, perno_f_texcoords, 30, 31, 32);
	triangle(perno_f, 11, 9, 8, perno_f_normals, 23, perno_f_texcoords, 32, 2, 30);
	triangle(perno_f, 6, 7, 12, perno_f_normals, 24, perno_f_texcoords, 26, 33, 24);
	triangle(perno_f, 12, 7, 13, perno_f_normals, 25, perno_f_texcoords, 24, 33, 34);
	triangle(perno_f, 7, 5, 13, perno_f_normals, 26, perno_f_texcoords, 33, 35, 34);
	triangle(perno_f, 13, 5, 11, perno_f_normals, 27, perno_f_texcoords, 34, 35, 36);
	triangle(perno_f, 19, 17, 27, perno_f_normals, 28, perno_f_texcoords, 17, 37, 18);
	triangle(perno_f, 27, 17, 25, perno_f_normals, 29, perno_f_texcoords, 18, 37, 38);
	triangle(perno_f, 25, 17, 23, perno_f_normals, 30, perno_f_texcoords, 38, 37, 39);
	triangle(perno_f, 23, 17, 15, perno_f_normals, 31, perno_f_texcoords, 39, 37, 40);
	triangle(perno_f, 16, 24, 14, perno_f_normals, 32, perno_f_texcoords, 16, 14, 41);
	triangle(perno_f, 14, 24, 22, perno_f_normals, 33, perno_f_texcoords, 41, 14, 42);
	triangle(perno_f, 4, 10, 2, perno_f_normals, 34, perno_f_texcoords, 27, 25, 43);
	triangle(perno_f, 2, 10, 8, perno_f_normals, 35, perno_f_texcoords, 43, 25, 44);
	triangle(perno_f, 11, 5, 9, perno_f_normals, 36, perno_f_texcoords, 36, 35, 45);
	triangle(perno_f, 9, 5, 3, perno_f_normals, 37, perno_f_texcoords, 45, 35, 46);
	triangle(perno_f, 15, 14, 9, perno_f_normals, 38, perno_f_texcoords, 4, 22, 2);
	triangle(perno_f, 9, 14, 8, perno_f_normals, 39, perno_f_texcoords, 2, 22, 30);
	triangle(perno_f, 0, 1, 2, perno_f_normals, 40, perno_f_texcoords, 47, 1, 48);
	triangle(perno_f, 2, 1, 3, perno_f_normals, 41, perno_f_texcoords, 48, 1, 49);
	triangle(perno_f, 2, 3, 4, perno_f_normals, 42, perno_f_texcoords, 48, 49, 50);
	triangle(perno_f, 4, 3, 6, perno_f_normals, 43, perno_f_texcoords, 50, 49, 51);
	triangle(perno_f, 6, 3, 7, perno_f_normals, 44, perno_f_texcoords, 51, 49, 52);
	triangle(perno_f, 7, 3, 5, perno_f_normals, 45, perno_f_texcoords, 52, 49, 53);
	triangle(perno_f, 22, 20, 14, perno_f_normals, 46, perno_f_texcoords, 42, 6, 41);
	triangle(perno_f, 14, 20, 0, perno_f_normals, 47, perno_f_texcoords, 41, 6, 47);
	triangle(perno_f, 14, 0, 8, perno_f_normals, 48, perno_f_texcoords, 41, 47, 44);
	triangle(perno_f, 8, 0, 2, perno_f_normals, 49, perno_f_texcoords, 44, 47, 43);
	triangle(perno_f, 1, 0, 21, perno_f_normals, 50, perno_f_texcoords, 1, 47, 3);
	triangle(perno_f, 21, 0, 20, perno_f_normals, 51, perno_f_texcoords, 3, 47, 6);
}

// Thumb ---------------------------------------------

var pollice = [
	vec4(-8.0802, 0.5823, 0.5, 1.0),
	vec4(-8.0802, 0.5823, -0.5, 1.0),
	vec4(-7.7024, 0.2652, 1.8322, 1.0),
	vec4(-7.7024, 0.2652, -1.8322, 1.0),
	vec4(-7.4374, 1.3483, 0.5, 1.0),
	vec4(-7.4374, 1.3483, -0.5, 1.0),
	vec4(-7.0596, 1.0313, 1.8322, 1.0),
	vec4(-7.0596, 1.0313, -1.8322, 1.0),
	vec4(-5.8305, 3.2634, -0.5, 1.0),
	vec4(-5.8305, 3.2634, 0.5, 1.0),
	vec4(-5.7821, -1.3461, 2.25, 1.0),
	vec4(-5.7821, -1.3461, -2.25, 1.0),
	vec4(-5.4527, 2.9464, 1.8322, 1.0),
	vec4(-5.4527, 2.9464, -1.8322, 1.0),
	vec4(-5.1877, 4.0295, -0.5, 1.0),
	vec4(-5.1877, 4.0295, 0.5, 1.0),
	vec4(-5.1393, -0.5801, 2.25, 1.0),
	vec4(-5.1393, -0.5801, -2.25, 1.0),
	vec4(-4.8099, 3.7124, 1.8322, 1.0),
	vec4(-4.8099, 3.7124, -1.8322, 1.0),
	vec4(-4.8, -5.5, -0.0, 1.0),
	vec4(-4.5021, -4.3297, -0.0, 1.0),
	vec4(-4.3229, -4.7474, -1.1309, 1.0),
	vec4(-4.3229, -4.7474, 1.1309, 1.0),
	vec4(-4.1569, -5.5, 2.4, 1.0),
	vec4(-4.1569, -5.5, -2.4, 1.0),
	vec4(-4.1326, -5.1909, 2.25, 1.0),
	vec4(-4.1326, -5.1909, -2.25, 1.0),
	vec4(-3.5323, 1.335, 2.25, 1.0),
	vec4(-3.5323, 1.335, -2.25, 1.0),
	vec4(-3.3481, -1.375, -2.25, 1.0),
	vec4(-3.3481, -1.375, 2.25, 1.0),
	vec4(-3.0695, -4.125, -3.2096, 1.0),
	vec4(-2.8895, 2.1011, 2.25, 1.0),
	vec4(-2.8895, 2.1011, -2.25, 1.0),
	vec4(-2.8695, 2.0842, 0.0, 1.0),
	vec4(-2.698, 1.9404, 2.1294, 1.0),
	vec4(-2.698, 1.9404, -2.1294, 1.0),
	vec4(-2.6257, 1.8797, -2.25, 1.0),
	vec4(-2.625, 1.8791, 2.25, 1.0),
	vec4(-2.4447, -0.0, 2.9947, 1.0),
	vec4(-2.4, -5.5, 4.1569, 1.0),
	vec4(-2.4, -5.5, -4.1569, 1.0),
	vec4(-2.0248, 2.75, -2.8652, 1.0),
	vec4(-2.0, 5.5, 2.0, 1.0),
	vec4(-2.0, 5.5, 0.0, 1.0),
	vec4(-2.0, 5.5, -2.0, 1.0),
	vec4(-1.8069, 0.0, -3.8059, 1.0),
	vec4(-1.2219, 5.5, 3.422, 1.0),
	vec4(-1.2138, 5.5, -3.4549, 1.0),
	vec4(0.0, -5.5, 4.8, 1.0),
	vec4(0.0, -5.5, -4.8, 1.0),
	vec4(0.3117, 5.5, -4.1569, 1.0),
	vec4(0.3275, 5.5, 4.1569, 1.0),
	vec4(2.4, -5.5, 4.1569, 1.0),
	vec4(2.4, -5.5, -4.1569, 1.0),
	vec4(2.4, 5.5, 4.1569, 1.0),
	vec4(2.4, 5.5, -4.1569, 1.0),
	vec4(4.1569, -5.5, 2.4, 1.0),
	vec4(4.1569, -5.5, -2.4, 1.0),
	vec4(4.1569, 5.5, 2.4, 1.0),
	vec4(4.1569, 5.5, -2.4, 1.0),
	vec4(4.8, -5.5, -0.0, 1.0),
	vec4(4.8, 5.5, 0.0, 1.0)
];
var pollice_normals = [
	vec4(-0.919, -0.3943, -0.0, 1.0),
	vec4(-0.919, -0.3943, -0.0, 1.0),
	vec4(-0.919, -0.3943, -0.0, 1.0),
	vec4(-0.919, -0.3943, 0.0, 1.0),
	vec4(-0.919, -0.3943, 0.0, 1.0),
	vec4(-0.0, -0.0, 1.0, 1.0),
	vec4(-0.9424, 0.2236, 0.2488, 1.0),
	vec4(-0.9488, 0.1951, -0.2483, 1.0),
	vec4(-0.9469, 0.1976, -0.2537, 1.0),
	vec4(-0.9413, 0.2396, 0.2377, 1.0),
	vec4(-0.9691, 0.2467, 0.0, 1.0),
	vec4(-0.9813, 0.1924, 0.0, 1.0),
	vec4(-0.7993, 0.1776, 0.574, 1.0),
	vec4(-0.8627, 0.1815, 0.4721, 1.0),
	vec4(-0.7428, 0.1326, 0.6562, 1.0),
	vec4(-0.7684, 0.1707, 0.6168, 1.0),
	vec4(-0.822, 0.1399, 0.552, 1.0),
	vec4(-0.7758, 0.1244, 0.6186, 1.0),
	vec4(-0.6977, 0.1622, 0.6977, 1.0),
	vec4(-0.9765, 0.1948, 0.0918, 1.0),
	vec4(-0.9413, 0.2396, -0.2377, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, -0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(-0.0, 1.0, 0.0, 1.0),
	vec4(0.0, 1.0, 0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(-0.0, -1.0, -0.0, 1.0),
	vec4(-0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(-0.0, -1.0, -0.0, 1.0),
	vec4(-0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.0, -1.0, -0.0, 1.0),
	vec4(0.9659, -0.0, 0.2588, 1.0),
	vec4(0.9659, -0.0, 0.2588, 1.0),
	vec4(0.9659, 0.0, -0.2588, 1.0),
	vec4(0.9659, 0.0, -0.2588, 1.0),
	vec4(0.7071, 0.0, -0.7071, 1.0),
	vec4(0.7071, 0.0, -0.7071, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.2585, 0.0491, -0.9648, 1.0),
	vec4(-0.2578, 0.0892, -0.9621, 1.0),
	vec4(-0.8184, 0.1791, -0.546, 1.0),
	vec4(-0.4158, 0.1025, -0.9037, 1.0),
	vec4(-0.3235, 0.0644, -0.944, 1.0),
	vec4(-0.7753, 0.1486, -0.6139, 1.0),
	vec4(-0.7146, 0.1648, -0.6798, 1.0),
	vec4(-0.8055, 0.1511, -0.573, 1.0),
	vec4(-0.9648, 0.2456, -0.0943, 1.0),
	vec4(-0.7241, 0.1607, -0.6707, 1.0),
	vec4(-0.7, 0.1414, -0.7, 1.0),
	vec4(-0.7192, 0.1212, -0.6842, 1.0),
	vec4(-0.869, 0.1556, -0.4696, 1.0),
	vec4(-0.8235, 0.1241, -0.5536, 1.0),
	vec4(-0.9424, 0.2236, -0.2488, 1.0),
	vec4(-0.2577, 0.0919, 0.9618, 1.0),
	vec4(-0.4277, 0.0654, 0.9016, 1.0),
	vec4(0.2588, -0.0, 0.9659, 1.0),
	vec4(0.0, 0.0584, 0.9983, 1.0),
	vec4(0.7071, -0.0, 0.7071, 1.0),
	vec4(0.7071, -0.0, 0.7071, 1.0),
	vec4(0.0, -0.0, -1.0, 1.0),
	vec4(-0.0, 0.0, -1.0, 1.0),
	vec4(-0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(0.0, 0.0, -1.0, 1.0),
	vec4(-0.7184, 0.6028, 0.3472, 1.0),
	vec4(-0.7184, 0.6028, 0.3472, 1.0),
	vec4(-0.1259, 0.1057, 0.9864, 1.0),
	vec4(-0.1259, 0.1057, 0.9864, 1.0),
	vec4(-0.6428, -0.766, -0.0, 1.0),
	vec4(-0.6428, -0.766, 0.0, 1.0),
	vec4(-0.6428, -0.766, 0.0, 1.0),
	vec4(-0.6428, -0.766, -0.0, 1.0),
	vec4(-0.7184, 0.6028, -0.3472, 1.0),
	vec4(-0.7184, 0.6028, -0.3472, 1.0),
	vec4(-0.1259, 0.1057, -0.9864, 1.0),
	vec4(-0.1259, 0.1057, -0.9864, 1.0),
	vec4(-0.7184, 0.6028, -0.3472, 1.0),
	vec4(-0.7184, 0.6028, -0.3472, 1.0),
	vec4(0.6428, 0.766, 0.0, 1.0),
	vec4(0.6428, 0.766, 0.0, 1.0),
	vec4(0.6428, 0.766, 0.0, 1.0),
	vec4(0.6428, 0.766, 0.0, 1.0),
	vec4(-0.766, 0.6428, 0.0, 1.0),
	vec4(-0.766, 0.6428, 0.0, 1.0),
	vec4(-0.7184, 0.6028, 0.3472, 1.0),
	vec4(-0.7184, 0.6028, 0.3472, 1.0),
	vec4(-0.1259, 0.1057, -0.9864, 1.0),
	vec4(-0.1259, 0.1057, -0.9864, 1.0),
	vec4(-0.1259, 0.1057, 0.9864, 1.0),
	vec4(-0.1259, 0.1057, 0.9864, 1.0),
	vec4(0.0, -0.0, 1.0, 1.0),
	vec4(0.0, -0.0, 1.0, 1.0),
	vec4(-0.0, -0.0, 1.0, 1.0),
	vec4(0.0, 0.0, 1.0, 1.0),
	vec4(-0.766, 0.6428, 0.0, 1.0),
	vec4(-0.766, 0.6428, 0.0, 1.0),
	vec4(0.6428, 0.766, 0.0, 1.0),
	vec4(0.6428, 0.766, 0.0, 1.0),
	vec4(0.6428, 0.766, 0.0, 1.0),
	vec4(0.6428, 0.766, 0.0, 1.0),
	vec4(0.6428, 0.766, -0.0, 1.0),
	vec4(0.6428, 0.766, 0.0, 1.0),
	vec4(0.6428, 0.766, -0.0, 1.0),
	vec4(0.6428, 0.766, -0.0, 1.0),
	vec4(0.6428, 0.766, -0.0, 1.0),
	vec4(-0.6428, -0.766, -0.0, 1.0),
	vec4(-0.6428, -0.766, 0.0, 1.0),
	vec4(-0.6428, -0.766, -0.0, 1.0),
	vec4(-0.6428, -0.766, -0.0, 1.0),
	vec4(-0.766, 0.6428, 0.0, 1.0),
	vec4(-0.766, 0.6428, 0.0, 1.0),
	vec4(-0.8018, 0.178, -0.5704, 1.0),
	vec4(-0.9488, 0.1951, 0.2483, 1.0),
	vec4(-0.9469, 0.1976, 0.2537, 1.0)
];
var pollice_texcoords = [
	vec2(0.4594, 0.8142),
	vec2(0.5876, 0.853),
	vec2(0.4751, 0.775),
	vec2(0.5876, 0.6971),
	vec2(0.4594, 0.7358),
	vec2(0.4427, 0.6971),
	vec2(0.4427, 0.853),
	vec2(0.5534, 0.93),
	vec2(0.8704, 0.1527),
	vec2(0.8595, 0.0717),
	vec2(0.8437, 0.1107),
	vec2(0.5377, 0.63),
	vec2(0.5534, 0.62),
	vec2(0.8493, 0.2317),
	vec2(0.8595, 0.2379),
	vec2(0.8287, 0.1501),
	vec2(0.4066, 0.9455),
	vec2(0.3961, 0.8773),
	vec2(0.2758, 0.8958),
	vec2(0.3858, 0.809),
	vec2(0.2613, 0.8233),
	vec2(0.2836, 0.9693),
	vec2(0.2828, 0.9745),
	vec2(0.4206, 0.9998),
	vec2(0.043, 0.0853),
	vec2(0.2372, 0.0821),
	vec2(0.1955, 0.0357),
	vec2(0.3059, 0.0684),
	vec2(0.4206, 0.1489),
	vec2(0.043, 0.0847),
	vec2(0.0546, 0.0002),
	vec2(0.8386, 0.191),
	vec2(0.6583, 0.8562),
	vec2(0.6805, 0.9391),
	vec2(0.6805, 0.7732),
	vec2(0.7412, 0.7126),
	vec2(0.8128, 0.7126),
	vec2(0.7412, 0.9998),
	vec2(0.8134, 0.9998),
	vec2(0.8661, 0.9755),
	vec2(0.8932, 0.9252),
	vec2(0.8932, 0.8562),
	vec2(0.8932, 0.7871),
	vec2(0.8663, 0.7379),
	vec2(0.7414, 0.3467),
	vec2(0.6985, 0.2724),
	vec2(0.7414, 0.4325),
	vec2(0.6985, 0.5069),
	vec2(0.6242, 0.2294),
	vec2(0.6242, 0.5498),
	vec2(0.5383, 0.2294),
	vec2(0.5383, 0.5498),
	vec2(0.464, 0.2724),
	vec2(0.464, 0.5069),
	vec2(0.4211, 0.3467),
	vec2(0.4211, 0.4325),
	vec2(0.0253, 0.3416),
	vec2(0.02, 0.4273),
	vec2(0.4046, 0.365),
	vec2(0.3993, 0.4507),
	vec2(0.0147, 0.5129),
	vec2(0.394, 0.5363),
	vec2(0.0094, 0.5986),
	vec2(0.3887, 0.622),
	vec2(0.3843, 0.694),
	vec2(0.0036, 0.6842),
	vec2(0.0002, 0.7699),
	vec2(0.1915, 0.7608),
	vec2(0.2885, 0.7882),
	vec2(0.259, 0.8185),
	vec2(0.3828, 0.752),
	vec2(0.0488, 0.8086),
	vec2(0.0016, 0.8557),
	vec2(0.1453, 0.8367),
	vec2(0.0359, 0.1702),
	vec2(0.4148, 0.2079),
	vec2(0.4099, 0.2793),
	vec2(0.0306, 0.2559),
	vec2(0.6578, 0.5579),
	vec2(0.6472, 0.5525),
	vec2(0.6422, 0.5888),
	vec2(0.6032, 0.6661),
	vec2(0.9156, 0.3293),
	vec2(0.8811, 0.3293),
	vec2(0.9156, 0.3784),
	vec2(0.8811, 0.3784),
	vec2(0.9156, 0.2415),
	vec2(0.8811, 0.2415),
	vec2(0.7589, 0.2528),
	vec2(0.7419, 0.2988),
	vec2(0.8455, 0.2384),
	vec2(0.7419, 0.3334),
	vec2(0.7589, 0.3794),
	vec2(0.8455, 0.3938),
	vec2(0.8811, 0.4129),
	vec2(0.8811, 0.462),
	vec2(0.9156, 0.4129),
	vec2(0.9156, 0.462),
	vec2(0.9156, 0.5498),
	vec2(0.8811, 0.5498),
	vec2(0.8806, 0.3784),
	vec2(0.8806, 0.3293),
	vec2(0.846, 0.3784),
	vec2(0.846, 0.3293),
	vec2(0.8747, 0.5566),
	vec2(0.7881, 0.571),
	vec2(0.7881, 0.6976),
	vec2(0.7711, 0.6171),
	vec2(0.7711, 0.6516),
	vec2(0.8747, 0.7121),
	vec2(0.846, 0.4129),
	vec2(0.8806, 0.4129),
	vec2(0.846, 0.462),
	vec2(0.8806, 0.462),
	vec2(0.846, 0.2415),
	vec2(0.8806, 0.2415),
	vec2(0.846, 0.5498),
	vec2(0.8806, 0.5498),
	vec2(0.6472, 0.9975),
	vec2(0.6422, 0.9612),
	vec2(0.6032, 0.8839),
	vec2(0.6578, 0.9921),
	vec2(0.652, 0.5503),
	vec2(0.6583, 0.7079),
	vec2(0.667, 0.7121),
	vec2(0.6661, 0.6343),
	vec2(0.7536, 0.6976),
	vec2(0.7706, 0.6516),
	vec2(0.7706, 0.6171),
	vec2(0.7536, 0.571),
	vec2(0.667, 0.5566),
	vec2(0.652, 0.9998),
	vec2(0.6583, 0.5608),
	vec2(0.8455, 0.5498),
	vec2(0.8455, 0.3943),
	vec2(0.7589, 0.5353),
	vec2(0.7419, 0.4893),
	vec2(0.7419, 0.4548),
	vec2(0.7589, 0.4088),
	vec2(0.8283, 0.0824),
	vec2(0.7419, 0.0824),
	vec2(0.8283, 0.2379),
	vec2(0.7419, 0.2379),
	vec2(0.4211, 0.8846),
	vec2(0.8704, 0.0669)
];
function pollice_triangles() {
	triangle(pollice, 23, 10, 21, pollice_normals, 0, pollice_texcoords, 0, 1, 2);
	triangle(pollice, 21, 10, 11, pollice_normals, 1, pollice_texcoords, 2, 1, 3);
	triangle(pollice, 21, 11, 22, pollice_normals, 2, pollice_texcoords, 2, 3, 4);
	triangle(pollice, 22, 11, 27, pollice_normals, 3, pollice_texcoords, 4, 3, 5);
	triangle(pollice, 23, 26, 10, pollice_normals, 4, pollice_texcoords, 0, 6, 1);
	triangle(pollice, 10, 26, 31, pollice_normals, 5, pollice_texcoords, 1, 6, 7);
	triangle(pollice, 20, 26, 23, pollice_normals, 6, pollice_texcoords, 8, 9, 10);
	triangle(pollice, 25, 27, 30, pollice_normals, 7, pollice_texcoords, 11, 5, 12);
	triangle(pollice, 27, 25, 20, pollice_normals, 8, pollice_texcoords, 13, 14, 8);
	triangle(pollice, 21, 20, 23, pollice_normals, 9, pollice_texcoords, 15, 8, 10);
	triangle(pollice, 44, 45, 35, pollice_normals, 10, pollice_texcoords, 16, 17, 18);
	triangle(pollice, 45, 46, 37, pollice_normals, 11, pollice_texcoords, 17, 19, 20);
	triangle(pollice, 36, 39, 44, pollice_normals, 12, pollice_texcoords, 21, 22, 16);
	triangle(pollice, 39, 48, 44, pollice_normals, 13, pollice_texcoords, 22, 23, 16);
	triangle(pollice, 41, 40, 31, pollice_normals, 14, pollice_texcoords, 24, 25, 26);
	triangle(pollice, 40, 39, 31, pollice_normals, 15, pollice_texcoords, 25, 27, 26);
	triangle(pollice, 48, 39, 40, pollice_normals, 16, pollice_texcoords, 28, 27, 25);
	triangle(pollice, 40, 41, 48, pollice_normals, 17, pollice_texcoords, 25, 29, 28);
	triangle(pollice, 24, 41, 31, pollice_normals, 18, pollice_texcoords, 30, 24, 26);
	triangle(pollice, 36, 44, 35, pollice_normals, 19, pollice_texcoords, 21, 16, 18);
	triangle(pollice, 20, 21, 22, pollice_normals, 20, pollice_texcoords, 8, 15, 31);
	triangle(pollice, 63, 61, 60, pollice_normals, 21, pollice_texcoords, 32, 33, 34);
	triangle(pollice, 60, 61, 56, pollice_normals, 22, pollice_texcoords, 34, 33, 35);
	triangle(pollice, 56, 61, 53, pollice_normals, 23, pollice_texcoords, 35, 33, 36);
	triangle(pollice, 53, 61, 57, pollice_normals, 24, pollice_texcoords, 36, 33, 37);
	triangle(pollice, 53, 57, 52, pollice_normals, 25, pollice_texcoords, 36, 37, 38);
	triangle(pollice, 49, 46, 52, pollice_normals, 26, pollice_texcoords, 39, 40, 38);
	triangle(pollice, 52, 46, 45, pollice_normals, 27, pollice_texcoords, 38, 40, 41);
	triangle(pollice, 52, 45, 53, pollice_normals, 28, pollice_texcoords, 38, 41, 36);
	triangle(pollice, 53, 45, 44, pollice_normals, 29, pollice_texcoords, 36, 41, 42);
	triangle(pollice, 53, 44, 48, pollice_normals, 30, pollice_texcoords, 36, 42, 43);
	triangle(pollice, 62, 58, 59, pollice_normals, 31, pollice_texcoords, 44, 45, 46);
	triangle(pollice, 59, 58, 55, pollice_normals, 32, pollice_texcoords, 46, 45, 47);
	triangle(pollice, 55, 58, 54, pollice_normals, 33, pollice_texcoords, 47, 45, 48);
	triangle(pollice, 55, 54, 51, pollice_normals, 34, pollice_texcoords, 47, 48, 49);
	triangle(pollice, 51, 54, 50, pollice_normals, 35, pollice_texcoords, 49, 48, 50);
	triangle(pollice, 51, 50, 42, pollice_normals, 36, pollice_texcoords, 49, 50, 51);
	triangle(pollice, 42, 50, 41, pollice_normals, 37, pollice_texcoords, 51, 50, 52);
	triangle(pollice, 42, 41, 25, pollice_normals, 38, pollice_texcoords, 51, 52, 53);
	triangle(pollice, 25, 41, 24, pollice_normals, 39, pollice_texcoords, 53, 52, 54);
	triangle(pollice, 25, 24, 20, pollice_normals, 40, pollice_texcoords, 53, 54, 55);
	triangle(pollice, 58, 62, 60, pollice_normals, 41, pollice_texcoords, 56, 57, 58);
	triangle(pollice, 60, 62, 63, pollice_normals, 42, pollice_texcoords, 58, 57, 59);
	triangle(pollice, 62, 59, 63, pollice_normals, 43, pollice_texcoords, 57, 60, 59);
	triangle(pollice, 63, 59, 61, pollice_normals, 44, pollice_texcoords, 59, 60, 61);
	triangle(pollice, 59, 55, 61, pollice_normals, 45, pollice_texcoords, 60, 62, 61);
	triangle(pollice, 61, 55, 57, pollice_normals, 46, pollice_texcoords, 61, 62, 63);
	triangle(pollice, 52, 57, 55, pollice_normals, 47, pollice_texcoords, 64, 63, 62);
	triangle(pollice, 52, 55, 51, pollice_normals, 48, pollice_texcoords, 64, 62, 65);
	triangle(pollice, 51, 42, 47, pollice_normals, 49, pollice_texcoords, 65, 66, 67);
	triangle(pollice, 46, 43, 38, pollice_normals, 50, pollice_texcoords, 19, 68, 69);
	triangle(pollice, 52, 47, 49, pollice_normals, 51, pollice_texcoords, 64, 67, 70);
	triangle(pollice, 47, 52, 51, pollice_normals, 52, pollice_texcoords, 67, 64, 65);
	triangle(pollice, 43, 47, 32, pollice_normals, 53, pollice_texcoords, 68, 67, 71);
	triangle(pollice, 25, 30, 32, pollice_normals, 54, pollice_texcoords, 72, 73, 71);
	triangle(pollice, 38, 43, 32, pollice_normals, 55, pollice_texcoords, 69, 68, 71);
	triangle(pollice, 35, 45, 37, pollice_normals, 56, pollice_texcoords, 18, 17, 20);
	triangle(pollice, 30, 38, 32, pollice_normals, 57, pollice_texcoords, 73, 69, 71);
	triangle(pollice, 25, 32, 42, pollice_normals, 58, pollice_texcoords, 72, 71, 66);
	triangle(pollice, 47, 42, 32, pollice_normals, 59, pollice_texcoords, 67, 66, 71);
	triangle(pollice, 43, 46, 49, pollice_normals, 60, pollice_texcoords, 68, 19, 70);
	triangle(pollice, 43, 49, 47, pollice_normals, 61, pollice_texcoords, 68, 70, 67);
	triangle(pollice, 27, 20, 22, pollice_normals, 62, pollice_texcoords, 13, 8, 31);
	triangle(pollice, 50, 48, 41, pollice_normals, 63, pollice_texcoords, 74, 28, 29);
	triangle(pollice, 48, 50, 53, pollice_normals, 64, pollice_texcoords, 28, 74, 75);
	triangle(pollice, 56, 50, 54, pollice_normals, 65, pollice_texcoords, 76, 74, 77);
	triangle(pollice, 56, 53, 50, pollice_normals, 66, pollice_texcoords, 76, 75, 74);
	triangle(pollice, 54, 58, 56, pollice_normals, 67, pollice_texcoords, 77, 56, 76);
	triangle(pollice, 56, 58, 60, pollice_normals, 68, pollice_texcoords, 76, 56, 58);
	triangle(pollice, 34, 38, 29, pollice_normals, 69, pollice_texcoords, 78, 79, 80);
	triangle(pollice, 29, 38, 30, pollice_normals, 70, pollice_texcoords, 80, 79, 12);
	triangle(pollice, 29, 30, 17, pollice_normals, 71, pollice_texcoords, 80, 12, 81);
	triangle(pollice, 17, 30, 11, pollice_normals, 72, pollice_texcoords, 81, 12, 3);
	triangle(pollice, 27, 11, 30, pollice_normals, 73, pollice_texcoords, 5, 3, 12);
	triangle(pollice, 12, 18, 9, pollice_normals, 74, pollice_texcoords, 82, 83, 84);
	triangle(pollice, 9, 18, 15, pollice_normals, 75, pollice_texcoords, 84, 83, 85);
	triangle(pollice, 12, 28, 18, pollice_normals, 76, pollice_texcoords, 82, 86, 83);
	triangle(pollice, 18, 28, 33, pollice_normals, 77, pollice_texcoords, 83, 86, 87);
	triangle(pollice, 12, 9, 28, pollice_normals, 78, pollice_texcoords, 88, 89, 90);
	triangle(pollice, 28, 9, 8, pollice_normals, 79, pollice_texcoords, 90, 89, 91);
	triangle(pollice, 28, 8, 13, pollice_normals, 80, pollice_texcoords, 90, 91, 92);
	triangle(pollice, 13, 29, 28, pollice_normals, 81, pollice_texcoords, 92, 93, 90);
	triangle(pollice, 14, 19, 8, pollice_normals, 82, pollice_texcoords, 94, 95, 96);
	triangle(pollice, 8, 19, 13, pollice_normals, 83, pollice_texcoords, 96, 95, 97);
	triangle(pollice, 13, 19, 29, pollice_normals, 84, pollice_texcoords, 97, 95, 98);
	triangle(pollice, 29, 19, 34, pollice_normals, 85, pollice_texcoords, 98, 95, 99);
	triangle(pollice, 5, 7, 1, pollice_normals, 86, pollice_texcoords, 100, 101, 102);
	triangle(pollice, 1, 7, 3, pollice_normals, 87, pollice_texcoords, 102, 101, 103);
	triangle(pollice, 17, 7, 6, pollice_normals, 88, pollice_texcoords, 104, 105, 106);
	triangle(pollice, 6, 7, 5, pollice_normals, 89, pollice_texcoords, 106, 105, 107);
	triangle(pollice, 6, 5, 4, pollice_normals, 90, pollice_texcoords, 106, 107, 108);
	triangle(pollice, 6, 16, 17, pollice_normals, 91, pollice_texcoords, 106, 109, 104);
	triangle(pollice, 1, 0, 5, pollice_normals, 92, pollice_texcoords, 102, 110, 100);
	triangle(pollice, 5, 0, 4, pollice_normals, 93, pollice_texcoords, 100, 110, 111);
	triangle(pollice, 2, 6, 0, pollice_normals, 94, pollice_texcoords, 112, 113, 110);
	triangle(pollice, 0, 6, 4, pollice_normals, 95, pollice_texcoords, 110, 113, 111);
	triangle(pollice, 3, 7, 11, pollice_normals, 96, pollice_texcoords, 103, 101, 114);
	triangle(pollice, 11, 7, 17, pollice_normals, 97, pollice_texcoords, 114, 101, 115);
	triangle(pollice, 2, 10, 6, pollice_normals, 98, pollice_texcoords, 112, 116, 113);
	triangle(pollice, 6, 10, 16, pollice_normals, 99, pollice_texcoords, 113, 116, 117);
	triangle(pollice, 39, 28, 31, pollice_normals, 100, pollice_texcoords, 118, 119, 7);
	triangle(pollice, 31, 28, 16, pollice_normals, 101, pollice_texcoords, 7, 119, 120);
	triangle(pollice, 31, 16, 10, pollice_normals, 102, pollice_texcoords, 7, 120, 1);
	triangle(pollice, 39, 33, 28, pollice_normals, 103, pollice_texcoords, 118, 121, 119);
	triangle(pollice, 15, 14, 9, pollice_normals, 104, pollice_texcoords, 85, 94, 84);
	triangle(pollice, 9, 14, 8, pollice_normals, 105, pollice_texcoords, 84, 94, 96);
	triangle(pollice, 38, 34, 37, pollice_normals, 106, pollice_texcoords, 79, 78, 122);
	triangle(pollice, 37, 34, 35, pollice_normals, 107, pollice_texcoords, 123, 124, 125);
	triangle(pollice, 35, 34, 19, pollice_normals, 108, pollice_texcoords, 125, 124, 126);
	triangle(pollice, 35, 19, 14, pollice_normals, 109, pollice_texcoords, 125, 126, 127);
	triangle(pollice, 14, 15, 35, pollice_normals, 110, pollice_texcoords, 127, 128, 125);
	triangle(pollice, 35, 15, 18, pollice_normals, 111, pollice_texcoords, 125, 128, 129);
	triangle(pollice, 35, 18, 33, pollice_normals, 112, pollice_texcoords, 125, 129, 130);
	triangle(pollice, 39, 36, 33, pollice_normals, 113, pollice_texcoords, 118, 131, 121);
	triangle(pollice, 33, 36, 35, pollice_normals, 114, pollice_texcoords, 130, 132, 125);
	triangle(pollice, 11, 10, 3, pollice_normals, 115, pollice_texcoords, 133, 134, 135);
	triangle(pollice, 3, 10, 1, pollice_normals, 116, pollice_texcoords, 135, 134, 136);
	triangle(pollice, 1, 10, 0, pollice_normals, 117, pollice_texcoords, 136, 134, 137);
	triangle(pollice, 0, 10, 2, pollice_normals, 118, pollice_texcoords, 137, 134, 138);
	triangle(pollice, 29, 17, 28, pollice_normals, 119, pollice_texcoords, 139, 140, 141);
	triangle(pollice, 28, 17, 16, pollice_normals, 120, pollice_texcoords, 141, 140, 142);
	triangle(pollice, 37, 46, 38, pollice_normals, 121, pollice_texcoords, 20, 19, 69);
	triangle(pollice, 26, 24, 31, pollice_normals, 122, pollice_texcoords, 6, 143, 7);
	triangle(pollice, 20, 24, 26, pollice_normals, 123, pollice_texcoords, 8, 144, 9);
}
