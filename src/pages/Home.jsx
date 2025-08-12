import React from 'react';
export default function Home() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#000000ff',
      height: '100vh',
    }}>
      <img src="/avatars/Home-Image.png" alt="..." style={{
        width: '30%',
        height: 'auto',
      }} />
      <h2 style={{
        flexGrow: 10,
        marginBottom: 0,
        fontSize: 24,
        color: '#000000ff',
      }}>Descarga White WhatsApp para Windows</h2>
      <p style={{
        flexGrow: 500,
        marginBottom: 0,
        color: '#3f3d3dff',
        fontSize: 12,
        fontWeight: 600,
      }}>Haz llamadas, comparte tu pantalla y obtén una experiencia más rápida al descargar la aplicación de Windows</p>
    </div>
  );
}
