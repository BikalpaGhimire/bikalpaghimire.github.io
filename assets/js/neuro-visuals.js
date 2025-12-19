/**
 * Neuro Visuals: Random Dot Kinetogram (RDK) and Spike Trains
 * Adds dynamic neuroscience-themed background to the landing page.
 */

(function () {
    const canvas = document.getElementById("neuro-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    let spikes = [];
    const particleCount = 80;
    const spikeChannels = 10;
    let mouse = { x: -1000, y: -1000 };
    let lastMouse = { x: -1000, y: -1000 };
    let mouseDelta = { x: 0, y: 0 };

    // Resize handler
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
        initSpikes();
    }
    window.addEventListener("resize", resize);

    // Track mouse
    document.addEventListener("mousemove", (e) => {
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        // Calculate mouse velocity for coherence influence
        mouseDelta.x = mouse.x - lastMouse.x;
        mouseDelta.y = mouse.y - lastMouse.y;
    });

    // --- Random Dot Kinetogram (RDK) ---
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            // Base random movement
            this.vx = (Math.random() - 0.5) * 1;
            this.vy = (Math.random() - 0.5) * 1;
            this.size = Math.random() * 2 + 1;
            this.color = `rgba(100, 100, 100, ${Math.random() * 0.3 + 0.1})`;
        }

        update() {
            // Mouse influence (Directional Coherence)
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // If mouse is moving, impart some coherence
            if (dist < 400 && (Math.abs(mouseDelta.x) > 1 || Math.abs(mouseDelta.y) > 1)) {
                this.vx += mouseDelta.x * 0.02;
                this.vy += mouseDelta.y * 0.02;
            }

            // Friction to return to chaotic state
            this.vx *= 0.98;
            this.vy *= 0.98;

            // Maintain minimum movement
            if (Math.abs(this.vx) < 0.2) this.vx += (Math.random() - 0.5) * 0.1;
            if (Math.abs(this.vy) < 0.2) this.vy += (Math.random() - 0.5) * 0.1;

            // Limit max speed
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > 4) {
                this.vx = (this.vx / speed) * 4;
                this.vy = (this.vy / speed) * 4;
            }

            this.x += this.vx;
            this.y += this.vy;

            // Wrapping
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // --- Spike Trains ---
    // A simple visualizer that looks like raster plots scrolling by
    class SpikeChannel {
        constructor(y) {
            this.y = y;
            this.spikes = []; // Array of x positions
            this.speed = 2;
        }

        update() {
            // Scroll spikes
            for (let i = this.spikes.length - 1; i >= 0; i--) {
                this.spikes[i] -= this.speed;
                if (this.spikes[i] < -10) {
                    this.spikes.splice(i, 1);
                }
            }

            // Generate new spikes (Poisson-like)
            if (Math.random() < 0.02) {
                this.spikes.push(width);
            }
        }

        draw() {
            // Draw baseline
            ctx.strokeStyle = "rgba(150, 150, 150, 0.05)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, this.y);
            ctx.lineTo(width, this.y);
            ctx.stroke();

            // Draw spikes
            ctx.strokeStyle = "rgba(0, 118, 223, 0.2)"; // Theme blue
            ctx.lineWidth = 2;
            ctx.beginPath();
            this.spikes.forEach((x) => {
                ctx.moveTo(x, this.y - 10);
                ctx.lineTo(x, this.y + 10);
            });
            ctx.stroke();
        }
    }

    function initSpikes() {
        spikes = [];
        // Create channels at the top of the screen (background of profile/header)
        // Starting slightly below the very top to avoid nav collision if needed
        const startY = 120;
        for (let i = 0; i < spikeChannels; i++) {
            spikes.push(new SpikeChannel(startY + i * 40));
        }
    }

    // --- Animation Loop ---
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw Spikes
        spikes.forEach((s) => {
            s.update();
            s.draw();
        });

        // Draw RDK
        particles.forEach((p) => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    // Initialize
    resize();
    animate();
})();
