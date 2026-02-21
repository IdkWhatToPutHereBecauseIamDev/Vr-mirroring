AFRAME.registerComponent('movement-switcher', {
  init: function () {
    this.modes = ['none', 'joystick', 'gorilla', 'hooks'];
    this.currentModeIndex = 0;
    this.player = document.querySelector('#player');
    this.textDisplay = document.querySelector('#movement-text');

    // Listen for Button X (Left Hand) or Button B (Right Hand)
    this.el.addEventListener('xbuttondown', () => this.cycleMode());
    this.el.addEventListener('bbuttondown', () => this.cycleMode());
  },

  cycleMode: function () {
    this.currentModeIndex = (this.currentModeIndex + 1) % this.modes.length;
    let mode = this.modes[this.currentModeIndex];
    
    // Update Text on Left Hand
    this.textDisplay.setAttribute('value', "Movement: " + mode.toUpperCase());

    // Toggle Components
    this.player.setAttribute('wasd-controls', `enabled: ${mode === 'joystick'}`);
    this.player.setAttribute('look-controls', `enabled: ${mode === 'joystick'}`);
    
    // Logic for Gorilla and Hooks
    this.player.setAttribute('gorilla-enabled', mode === 'gorilla');
    this.player.setAttribute('hooks-enabled', mode === 'hooks');
  }
});
