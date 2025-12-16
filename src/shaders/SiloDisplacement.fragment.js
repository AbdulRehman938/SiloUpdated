const fragment = `precision mediump float;

varying vec2 vFragPos;
varying vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform vec2 uMousePix;
uniform vec2 uVelocity;
uniform vec2 uAspect;
uniform float uRadiusPix;
uniform float uIntensity;
uniform float uTime;

float falloff(float d, float r) {
  float x = clamp(1.0 - d / r, 0.0, 1.0);
  return x * x * (3.0 - 2.0 * x);
}

void main(void) {
  float dist = distance(vFragPos, uMousePix);
  float influence = falloff(dist, uRadiusPix);
  
  vec2 dir = normalize(-uVelocity + 1e-5);
  float stretch = influence * uIntensity * 5.0;
  vec2 displacedUv = vTextureCoord + (dir * stretch) / uAspect;
  
  vec4 color = texture2D(uTexture, displacedUv);
  gl_FragColor = color;
}`;

export default fragment;
