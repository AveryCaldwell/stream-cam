# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### TODO:

1. Simple Webcam Feed:
   - Use the react-webcam library to capture and display the webcam feed in your app.
2. Start with Simple CSS Filters:
   - Before you get into complex filters, just apply simple CSS filters like blur, brightness, or grayscale.
3. Gradually Add More Complexity
   - Once the basics work (you can display a webcam feed and apply simple filters), slowly integrate more advanced effects, one at a time:
     - MediaPipe: Add face tracking or segmentation.
     - OpenCV.js: Implement advanced filters like face morphing or object recognition.
4. Testing & Optimization
   - Resource Monitoring: Since Snap Camera caused crashes, focus on testing your app for stability early. Use Chrome DevTools to monitor memory and CPU usage, and aim for lightweight code.
   - Performance Profiling: Keep an eye on how your app performs in real-time, using profiling tools within your development environment (like Chrome’s Performance tab).
