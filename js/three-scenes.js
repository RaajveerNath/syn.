/* ============================================
   syn. — Three.js 3D Scenes
   ============================================ */

const SynThree = {
    drinkColors: [
        0xC2453D, 0x4A7FA8, 0xD4A832, 0x4A7A4E, 0xD4723A,
        0xD4899A, 0x6B5490, 0x8A6E5A, 0xC8C4BC
    ],

    /* ---- Hero Prism — Radial Hex Panels ---- */
    initHeroPrism(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const w = container.clientWidth;
        const h = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
        camera.position.set(0, 0, 9.5);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Create a group that holds all 9 hex panels
        const group = new THREE.Group();
        group.rotation.x = 0.15; // slight tilt for 3D perspective

        // Build a hexagonal shape (elongated, gem-like)
        function createHexShape(scaleW, scaleH) {
            const shape = new THREE.Shape();
            // Elongated hexagon — taller than wide, gem/crystal proportions
            const hw = scaleW;  // half-width
            const hh = scaleH;  // half-height
            const neck = hh * 0.3;  // where the hex narrows

            shape.moveTo(0, hh);           // top point
            shape.lineTo(hw, neck);        // upper right
            shape.lineTo(hw, -neck);       // lower right
            shape.lineTo(0, -hh);          // bottom point
            shape.lineTo(-hw, -neck);      // lower left
            shape.lineTo(-hw, neck);       // upper left
            shape.closePath();
            return shape;
        }

        const hexShape = createHexShape(1.35, 2.8);
        const extrudeSettings = {
            depth: 0.03,
            bevelEnabled: false
        };
        const hexGeometry = new THREE.ExtrudeGeometry(hexShape, extrudeSettings);
        // Center the geometry
        hexGeometry.computeBoundingBox();
        hexGeometry.center();

        // Create 9 panels, each at 40° apart (360/9)
        const panelCount = 9;
        const angleStep = (Math.PI * 2) / panelCount;
        const spreadRadius = 1.6; // wider fan = more colors visible simultaneously

        this.drinkColors.forEach((color, i) => {
            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(color),
                transparent: true,
                opacity: 0.5,
                metalness: 0.25,
                roughness: 0.3,
                emissive: new THREE.Color(color),
                emissiveIntensity: 0.35,
                side: THREE.DoubleSide,
                depthWrite: false
            });

            const panel = new THREE.Mesh(hexGeometry, material);

            // Position each panel radially
            const angle = angleStep * i;
            panel.position.x = Math.sin(angle) * spreadRadius;
            panel.position.z = Math.cos(angle) * spreadRadius;

            // Rotate panel to face outward from center
            panel.rotation.y = angle;

            group.add(panel);
        });

        scene.add(group);

        // Lighting — even, soft fill to avoid hotspots
        const ambient = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambient);

        const light1 = new THREE.DirectionalLight(0xC9A84C, 0.4);
        light1.position.set(2, 3, 5);
        scene.add(light1);

        const light2 = new THREE.DirectionalLight(0xffffff, 0.3);
        light2.position.set(-2, -1, 3);
        scene.add(light2);

        // Animate — clockwise rotation
        const animate = () => {
            requestAnimationFrame(animate);
            // Clockwise rotation — slow, elegant
            group.rotation.y -= 0.003;
            renderer.render(scene, camera);
        };

        animate();

        // Handle resize
        const resizeObserver = new ResizeObserver(() => {
            const newW = container.clientWidth;
            const newH = container.clientHeight;
            if (newW > 0 && newH > 0) {
                camera.aspect = newW / newH;
                camera.updateProjectionMatrix();
                renderer.setSize(newW, newH);
            }
        });
        resizeObserver.observe(container);
    },

    /* ---- Explorer 3D Can ---- */
    initExplorerCan(containerId, color) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Clear previous
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const w = container.clientWidth;
        const h = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
        camera.position.set(0, 0, 8);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Hexagonal can shape
        const geometry = new THREE.CylinderGeometry(1.8, 1.8, 4, 6, 1, false);
        const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            metalness: 0.5,
            roughness: 0.2,
            transparent: true,
            opacity: 0.5,
            emissive: new THREE.Color(color),
            emissiveIntensity: 0.1
        });

        const can = new THREE.Mesh(geometry, material);
        can.rotation.x = 0.2;
        scene.add(can);

        // Wireframe
        const wireGeom = new THREE.CylinderGeometry(1.82, 1.82, 4.02, 6, 1, false);
        const wireMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color(color),
            wireframe: true,
            transparent: true,
            opacity: 0.2
        });
        const wire = new THREE.Mesh(wireGeom, wireMat);
        wire.rotation.x = 0.2;
        scene.add(wire);

        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambient);

        const light = new THREE.PointLight(0xC9A84C, 0.6, 20);
        light.position.set(3, 2, 5);
        scene.add(light);

        this._explorerAnim = () => {
            can.rotation.y += 0.005;
            wire.rotation.y += 0.005;
            renderer.render(scene, camera);
            this._explorerFrame = requestAnimationFrame(this._explorerAnim);
        };

        this._explorerAnim();

        const resizeObserver = new ResizeObserver(() => {
            const newW = container.clientWidth;
            const newH = container.clientHeight;
            if (newW > 0 && newH > 0) {
                camera.aspect = newW / newH;
                camera.updateProjectionMatrix();
                renderer.setSize(newW, newH);
            }
        });
        resizeObserver.observe(container);
    },

    _explorerFrame: null,
    _explorerAnim: null
};
