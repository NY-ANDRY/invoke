
useEffect(() => {
    gsap.to(".element", {
      rotation: 360, // Tourner l'élément de 360 degrés
      duration: 2, // Durée de l'animation
      repeat: -1, // Répétition infinie
      ease: "linear", // Rotation continue sans changement de vitesse
    });
  }, []);


  gsap.timeline({ repeat: -1, yoyo: true }) // Répéter l'animation avec un retour arrière
  .to(devDes.current, {
      x: 1,
      y: 1,
      duration: 0.4, // Durée pour l'étape 0% à 10%
      ease: "power4.out",
  })
  .to(devDes.current, {
      x: -1,
      y: -1,
      duration: 0.4, // Durée pour l'étape 10% à 50%
      ease: "power4.inOut",
  })
  .to(devDes.current, {
      x: 1,
      y: 1,
      duration: 0.4, // Durée pour l'étape 50% à 100%
      ease: "power4.out",
  })
  .to(devDes.current, {
      x: 0,
      y: 0,
      duration: 0.4, // Retour à l'état initial (100% à 0%)
      ease: "power4.inOut",
  });