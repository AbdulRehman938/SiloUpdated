const vertex = `precision mediump float;

in vec2 aPosition;

out vec2 vFragPos;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition(void) {
  vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
  
  vec2 clipPos;
  clipPos.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
  clipPos.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
  
  vFragPos = position.xy;
  vTextureCoord = aPosition * (uOutputFrame.zw * uInputSize.zw);
  
  return vec4(clipPos, 0.0, 1.0);
}

void main(void) {
  gl_Position = filterVertexPosition();
}`;

export default vertex;
