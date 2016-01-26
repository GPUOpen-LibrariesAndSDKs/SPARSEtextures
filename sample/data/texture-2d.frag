#version 420 core
#extension GL_AMD_sparse_texture : enable

#define POSITION	0
#define COLOR		3
#define TEXCOORD	4
#define FRAG_COLOR	0

layout(binding = 0) uniform sampler2D Diffuse;

in block
{
	vec2 Texcoord;
} In;

layout(location = FRAG_COLOR, index = 0) out vec4 Color;

void main()
{
	vec4 Fetch = vec4(0);

	int Code = sparseTexture(Diffuse, In.Texcoord.st, Fetch);
	if(sparseTexelResident(Code))
	{
		Color = Fetch;
	}
	else
	{
		Color = vec4(0.0, 0.5, 1.0, 1.0);
	}
}
