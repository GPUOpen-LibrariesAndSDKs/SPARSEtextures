================================================================================
AMD FirePro SDK
--------------------------------------------------------------------------------
http://developer.amd.com/sdks/wgsdk/Pages/default.aspx
firepro.developers@amd.com

================================================================================
Introduction
--------------------------------------------------------------------------------
This sample is presenting the GL_AMD_sparse_texture extension introduced by the
Southern Islands architechture.

Recent advances in application complexity and a desire for higher resolutions 
have pushed texture sizes up considerably. Often, the amount of physical memory 
available to a graphics processor is a limiting factor in the performance of 
texture-heavy applications. Once the available physical memory is exhausted, 
paging may occur bringing performance down considerably - or worse, the 
application may fail. Nevertheless, the amount of address space available to the 
graphics processor has increased to the point where many gigabytes of address 
space may be usable even though that amount of physical memory is not present.

This extension allows the separation of the graphics processor's address space 
(reservation) from the requirement that all textures must be physically backed 
(commitment). This exposes a limited form of virtualization for textures. Use 
cases include sparse textures, texture paging, on-demand and delayed loading of 
texture assets and application controlled level of detail.

================================================================================
Running the sample
--------------------------------------------------------------------------------
- A Southern Islands card either Radeon or FirePro is required to run this sample
- OpenGL 4.2 and AMD_sparse_texture are required to run this sample
- Right click to rotate
- Left click to zoom
