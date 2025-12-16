const vertex = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;
  varying vec2 vUv;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    
    vec2 mouseUV = uMouse * 0.5 + 0.5;
    float dist = distance(uv, mouseUV);
    float ripple = sin(dist * 10.0 - uTime * 3.0) * 0.1 * exp(-dist * 3.0);
    
    // Create downward liquid effect when hovering at bottom
    float bottomInfluence = smoothstep(0.7, 1.0, mouseUV.y); // Only when mouse is at bottom
    float verticalDist = abs(uv.y - mouseUV.y);
    float liquidDrop = sin(verticalDist * 8.0 - uTime * 4.0) * 0.2 * exp(-verticalDist * 2.0);
    
    // Combine effects
    float n = noise(uv * 3.0 + uTime * 0.5);
    pos.z += ((n * 0.15) + ripple + (liquidDrop * bottomInfluence)) * uHover;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragment = `
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uHover;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    vec2 mouseUV = uMouse * 0.5 + 0.5;
    float dist = distance(uv, mouseUV);
    float distortion = sin(dist * 15.0 - uTime * 2.0) * 0.02 * exp(-dist * 5.0);
    
    // Add downward liquid distortion when hovering at bottom
    float bottomInfluence = smoothstep(0.7, 1.0, mouseUV.y);
    float verticalDist = abs(uv.y - mouseUV.y);
    float liquidDistortion = sin(verticalDist * 12.0 - uTime * 3.0) * 0.03 * exp(-verticalDist * 3.0);
    
    uv += (distortion + vec2(0.0, liquidDistortion * bottomInfluence)) * uHover;
    
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
  }
`;

export default { vertex, fragment };