# 🎵 Global Music App (React 18 + TypeScript)

A high-performance music streaming application engineered to deliver seamless audio experiences globally.
Ready to run out-of-the-box with a zero-configuration setup in backend.

## 📖 Introduction

This project is a modern web-based music player that mimics a professional streaming experience (like Spotify). It solves the challenge of **geo-restricted content access** by utilizing a custom proxy middleware strategy.

- **Architecture**: Decoupled Frontend-Backend pattern.
- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite.
- **Backend**: Self-hosted NeteaseCloudMusicApi deployed on **Render** (Serverless).

## ✨ Key Features

- **🚀 Zero-Config Setup**: The app connects to a live cloud backend by default. No local server required for evaluation.
- **🌍 Geo-Restriction Bypass**: Implemented a transparency proxy to spoof IP headers (`X-Real-IP`), enabling music playback from US/Global networks.
- **⚡ Performance First**: Built with Vite for millisecond-level HMR; utilizes `Axios` interceptors for unified error handling.
- **🎨 Modern UI**: Responsive design tailored with Tailwind CSS.

## 🛠 Tech Stack

| Layer          | Technology                           |
| :------------- | :----------------------------------- |
| **Framework**  | React 18 + TypeScript                |
| **Build Tool** | Vite                                 |
| **Styling**    | Tailwind CSS + Lucide React (Icons)  |
| **Network**    | Axios (with Interceptors)            |
| **State Mgmt** | Zustand (Planned)                    |
| **Deployment** | Vercel (Frontend) + Render (Backend) |

## 🚀 Getting Started

You don't need to clone the backend repository. The application is pre-configured to communicate with the deployed production API.

### 1. Clone the Repository

```bash
git clone https://github.com/yansun0419-ux/music-app.git
cd music-app
```

### 2\. Install Dependencies

```bash
npm install
```

### 3\. Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The app should instantly load data from the cloud API.

---

## 📝 License

MIT

---

## 🤝 Contributin

Feel free to contribute by opening issues or submitting pull requests. Your contributions are welcome!

## 🔄 Changelog

| Date | Version | Description |
| :--- | :------ | :---------- |
