# imglink
A format that lets you open a URL from a randomly generated image. Pretty useless and just made for fun.

# NOTE
imglink is currently in early developement, and images often aren't read correctly as the image is pixelated and works best on images with smoother text.

# Usage
First, install all dependencies:
```
npm install
```
Generate image (example):
```
node generate "https://example.com" out.png
```

Image generated:

![Example image](examples/imglink-example.png)

Read image (example):
```
node view out.png
```
