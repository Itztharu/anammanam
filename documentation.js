/*!---|| CREATE BY RIFZA || ---!

 * Copyright 2024-2025 Rifza Pratama P, rifza.p.p, Azfir.
 * Github (https://github.com/Rifza123)
 * Site: https://xterm.tech
 * YoutubeChannel: https://youtube.com/@rifza?si=ELWRI9UpkoAnuYp0
 * WhatsappChannel: https://whatsapp.com/channel/0029VaauxAt4Y9li9UtlCu1V
 * Instagram: https://www.instagram.com/rifza.p.p?igsh=ZGUzMzM3NWJiOQ==

 */

const isDebug = true
let onProcess = false
const templateFiles = [
	'template/details/ai.html',
	'template/demo/ai.html',
	'template/details/downloader.html',
	'template/details/search.html',
	'template/details/tools.html',
	'template/demo/tools.html',
	'template/details/img2txt.html',
	'template/details/audioProcessing.html',
	'demo-template.html'
];

const gEr = () => {
    const f = Array.from(document.querySelectorAll("script")).some(s => s.src.includes("eruda"));
    if (f) {
        alert("Debugger still detected!");
        if (confirm("Check again?")) { gEr(); } else { gEr(); }
    }
};

const idi = isDebug && setInterval(() => {
    const f = Array.from(document.querySelectorAll("script")).some(s => s.src.includes("eruda"));
    if (f) {
        alert("Debugger detected!");
        clearInterval(idi);
        if (confirm("Check again?")) gEr();
    }
}, 5000);
const btnInfo = document.querySelectorAll('.btn-info');
const dataDetails = [
      { method: 'GET', endpoint: 'img2img/filters', description: 'AI Image filters with style', tag: 'ai', detailId: 'detail1', hasDemo: "demo7" },
      { method: 'GET', endpoint: 'img2txt/describe', description: 'AI Image To Prompt (describe)', tag: 'ai', detailId: 'detail2', hasDemo: false },
      { method: 'GET', endpoint: 'tools/enhance', description: 'AI Image Enhancement', tag: 'tools', detailId: 'detail3', hasDemo: "demo8" },
      { method: 'POST', endpoint: 'text2img/stablediffusion', description: 'AI Text To Image ▪︎ StableDiffusion', tag: 'ai', detailId: 'detail4', hasDemo: "demo1" },
      { method: 'GET', endpoint: 'chat/bard', description: 'Bard(Gemini) ▪︎ From Google', tag: 'ai', detailId: 'detail5', hasDemo: "demo4" },
      { method: 'GET', endpoint: 'img2txt/instant-describe', description: 'AI Image To Prompt (describe)', tag: 'ai', detailId: 'detail6', hasDemo: "demo6" },
      { method: 'POST', endpoint: 'audioProcessing/stems', description: 'Separating instruments & vocals', tag: 'tools', detailId: 'detail7', hasDemo: "demo5" },
      { method: 'POST', endpoint: 'chat/gpt', description: 'OpenAI-GPT_3.5 (sessions)', tag: 'ai', detailId: 'detail8', hasDemo: false },
      { method: 'GET', endpoint: 'text2img/instant-lora', description: 'SDXL Lora', tag: 'ai', detailId: 'detail11', hasDemo: "demo9" },
      { method: 'POST', endpoint: 'audioProcessing/voice-covers', description: 'AI Voice Covers', tag: 'ai', detailId: 'detail12', hasDemo: false },
      { method: 'POST', endpoint: 'audioProcessing/whatmusic', description: 'AI Music Search from audio', tag: 'tools', detailId: 'detail13', hasDemo: "demo10" },
      { method: 'POST', endpoint: 'audioProcessing/transcribe', description: 'AI Speech To Text', tag: 'tools', detailId: 'detail14', hasDemo: "demo11" },
      { method: 'POST', endpoint: 'img2video/luma', description: 'AI Image To Video', tag: 'ai', detailId: 'detail15', hasDemo: false },
      { method: 'GET', endpoint: 'tools/remini', description: 'Ai enhance(Face Enhance)', tag: 'tools', detailId: 'detail17', hasDemo: false },
      { method: 'GET', endpoint: 'downloader/tiktok', description: 'Tiktok Downloader(Support slides show)', tag: 'downloader', detailId: 'detail18', hasDemo: "demo18" },
      { method: 'GET', endpoint: 'downloader/youtube', description: 'Youtube Downloader', tag: 'downloader', detailId: 'detail19', hasDemo: "demo19" },
      { method: 'GET', endpoint: 'downloader/pinterest', description: 'Pinterest Video Downloader', tag: 'downloader', detailId: 'detail20', hasDemo: "demo20" },
      { method: 'GET', endpoint: 'downloader/facebook', description: 'Facebook Video Downloader', tag: 'downloader', detailId: 'detail21', hasDemo: "demo21" },
      { method: 'GET', endpoint: 'text2img/dalle3', description: 'Dalle3 Text To image', tag: 'ai', detailId: 'detail22', hasDemo: "demo22"},
      { method: 'GET', endpoint: 'downloader/instagram', description: 'Instagram Multi Downloader', tag: 'downloader', detailId: 'detail23', hasDemo: "demo23"},
      { method: 'GET', endpoint: 'tools/js-protector', description: 'Protect/Encrypt Your Javascript', tag: 'tools', detailId: 'detail24', hasDemo: "demo24"},
      { method: 'GET', endpoint: 'txt2img/animediff', description: 'StableDiffusion(XL) - Anime ', tag: 'ai', detailId: 'detail25', hasDemo: "demo25"},
      { method: 'GET', endpoint: 'img2img/enlarger', description: 'Ai image expansion', tag: 'ai', detailId: 'detail26', hasDemo: "demo26"},
      { method: 'GET', endpoint: 'tools/object-detection', description: 'Ai Object Detection', tag: 'tools', detailId: 'detail32', hasDemo: "demo27"},
      { method: 'POST', endpoint: 'chat/gemini-image', description: 'Google Gemini Image', tag: 'ai', detailId: 'detail28', hasDemo: "demo28" },
//      { method: 'GET', endpoint: 'text2speech/bella', description: 'Text to Speech Bella', tag: 'ai', detailId: 'detail9', hasDemo: "demo2" },
      { method: 'GET', endpoint: 'text2speech/elevenlabs', description: 'Elevenlabs Multilingual V2', tag: 'ai', detailId: 'detail16', hasDemo: false},
      { method: 'GET', endpoint: 'tools/key-checker', description: 'Check Api Key', tag: 'tools', detailId: false, hasDemo: "demo29"},
      { method: 'GET', endpoint: 'downloader/terabox', description: 'Terabox Downloader', tag: 'downloader', detailId: "detail30", hasDemo: "demo30"},
      { method: 'GET', endpoint: 'tools/image-removebg', description: 'Ai Background Remover(image)', tag: 'tools', detailId: 'detail31', hasDemo: "demo31" },
      { method: 'POST', endpoint: 'audioProcessing/song-generator', description: 'Ai Song Generator', tag: 'ai', detailId: 'detail33', hasDemo: false },
      { method: 'POST', endpoint: 'img2img/faceswap', description: 'Face Swap', tag: 'ai', detailId: 'detail34', hasDemo: false },
      { method: 'GET', endpoint: 'search/sfile', description: 'Sfile Mobi search', tag: 'search', detailId: 'detail35', hasDemo: false },
    ];



function filterTable(input = "") {
	const searchInput = input || document.getElementById("search").value.toLowerCase();
	const tag = document.querySelectorAll('.tag-table');
	const tableContainers = document.querySelectorAll('.table-concept');
	const tables = [{
			table: document.getElementById("toolsTable"),
			tag: tag[0],
			container: tableContainers[0]
		},
		{
			table: document.getElementById("aiTable"),
			tag: tag[1],
			container: tableContainers[1]
		},
		{
			table: document.getElementById("downloaderTable"),
			tag: tag[2],
			container: tableContainers[2]
		},
		{
			table: document.getElementById("searchTable"),
			tag: tag[3],
			container: tableContainers[3]
		}
	];

	tables.forEach(({
		table,
		tag,
		container
	}) => {
		const rows = table.getElementsByTagName("tr");
		let anyVisibleRow = false;

		for (let i = 1; i < rows.length; i++) {
			let cells = rows[i].getElementsByTagName("td");
			let match = false;
			for (let j = 0; j < cells.length; j++) {
				if (cells[j].textContent.toLowerCase().includes(searchInput)) {
					match = true;
					break;
				}
			}
			rows[i].style.display = match ? "" : "none";
			if (match) anyVisibleRow = true;
		}

		if (anyVisibleRow) {
			container.style.display = "";
			container.style.position = "relative";
			table.style.display = "";
			table.style.position = "relative";
			tag.style.display = "";
			tag.style.position = "relative";
		} else {
			container.style.display = "none";
			container.style.position = "absolute";
			table.style.display = "none";
			table.style.position = "absolute";
			tag.style.display = "none";
			tag.style.position = "absolute";
		}
	});

	const sidebar = document.getElementById('sidebar');
	let searchDrop = document.getElementById("searchDropdown");

	if (input) {
		setTimeout(() => {
			sidebar.classList.remove('active');
			overlay.classList.remove('active');
			searchDrop.classList.remove('show');
		}, 1000);
	}
}



function toggleDetails(button) {
	const details = button.nextElementSibling;
	if (details.style.display === "none" || details.style.display === "") {
		details.style.display = "block";
		button.textContent = "Hide Details";
	} else {
		details.style.display = "none";
		button.textContent = "Show Details";
	}
}

function copyCode(button) {
	const codeBlock = button.nextElementSibling;
	navigator.clipboard.writeText(codeBlock.textContent).then(() => {
		button.innerHTML = '<i class="btn-copy fas fa-clipboard-check"></i>';

		setTimeout(() => {
			button.innerHTML = '<i class="btn-copy fas fa-copy"></i>';
		}, 5000);
	}).catch(err => {
		console.error('Failed to copy text: ', err);
	});
}


function createDrawer(id) {
	const existingDrawers = document.querySelectorAll('.drawer');
	existingDrawers.forEach(drawer => {
		if (drawer.id !== id) {
			drawer.classList.remove('open');
		}
	});

	const existingDrawer = document.getElementById(id);
	if (existingDrawer) {
		existingDrawer.remove();
	}

	const drawer = document.createElement('div');
	drawer.id = id;
	drawer.className = 'drawer';

	let drawerContent = '';
	drawer.innerHTML = drawerContent;
	document.body.appendChild(drawer);
	toggleDrawer(id);
}

function toggleDrawer(id) {
	const drawer = document.getElementById(id);
	drawer.classList.toggle('open');
	if (drawer.classList.contains('open')) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}

}


function toggleDetails(tdElement, det = false) {
	const detailId = det ? det : tdElement.getAttribute('data-detail-id');
	const detailsTemplate = document.getElementById('templateContainer').querySelector(`#${detailId}`);
	const header = document.querySelector(".headerText");

	if (!detailsTemplate) {
		console.error(`No details found for id: ${detailId}`);
		return;
	}

	const detailsClone = detailsTemplate.content.cloneNode(true);
	const detailsDemo = detailsClone.querySelector('.detailsDemo');
	if (det && detailsDemo) {
		if (onProcess) return alert('Harap tunggu hingga proses selesai!');
	}
	const detailContent = document.getElementById('detailContent');
	detailContent.innerHTML = '';


	if (det && detailsDemo) {
		if (onProcess) return alert('Harap tunggu hingga proses selesai!');
		const loader = document.createElement('div');
		loader.id = 'drawer-loader';
		loader.innerHTML = `
            <div class="loder-box">
                <div class="battery"></div>
            </div>
        `;
		detailsDemo.appendChild(loader);

		detailContent.appendChild(detailsClone);

		setTimeout(() => {
			loader.remove();
			loadContent(detailsClone, detailId, header);
		}, 2000);
	} else {
		loadContent(detailsClone, detailId, header);
	}

	const detailDrawer = document.getElementById('detailDrawer');
	detailDrawer.classList.add('open');
	document.body.classList.add('no-scroll');
	overlay.classList.add('active');
}

function loadContent(detailsClone, detailId, header) {
	const detailContent = document.getElementById('detailContent');

	const detailData = dataDetails.find(a => a.detailId === detailId || a.hasDemo === detailId);

	if (detailData) {
		header.innerHTML = detailData.description;
	} else {
		console.error(`No data found for detailId: ${detailId}`);
	}

	if (!detailContent.contains(detailsClone)) {
		detailContent.appendChild(detailsClone);
	}

	if (detailId == "demo5") addUploadAreaListeners()

	hljs.highlightAll();
}


function toggleInfo() {
	const infoParams = document.querySelectorAll('#detailDrawer .details .code-block .params');
	const firstParam = infoParams[0];

	infoParams.forEach(param => {
		param.classList.toggle("open");
	});

	const btnInfo = document.querySelectorAll('#btn-info');
	btnInfo.forEach(inf => inf.classList.toggle("active"));

	if (firstParam) {
		firstParam.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
	}
}


function closeDrawer() {
	const detailDrawer = document.getElementById('detailDrawer');
	detailDrawer.classList.remove('open');
	document.body.classList.remove('no-scroll');
	overlay.classList.remove('active');
	btnInfo.forEach(inf => inf.classList.remove("active"))
}

// Audio Player Module
const AudioPlayer = {
	audioElement: null,
	progressInterval: null,

	handleAudioUpload: function(input) {
		const container = input.closest('.audio-upload-area');
		const playerContainer = container.querySelector('.audio-player-container');
		const fileNameElement = container.querySelector('.file-name');

		if (input.files && input.files[0]) {
			const file = input.files[0];
			const reader = new FileReader();

			reader.onload = (e) => {
				if (this.audioElement) {
					this.audioElement.pause();
					this.audioElement.src = '';
				}

				this.audioElement = new Audio(e.target.result);
				this.audioElement.addEventListener('loadedmetadata', () => {
					fileNameElement.textContent = file.name;
					container.classList.add('has-audio');
					playerContainer.style.display = 'block';
					this.updateDuration();
				});

				this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
				this.audioElement.addEventListener('ended', () => {
					const playBtn = container.querySelector('.play-pause-btn');
					this.updatePlayPauseButton(playBtn, false);
				});
			};

			reader.readAsDataURL(file);
		}
	},

	togglePlay: function(btn) {
		if (!this.audioElement) return;

		if (this.audioElement.paused) {
			this.audioElement.play();
			this.updatePlayPauseButton(btn, true);
		} else {
			this.audioElement.pause();
			this.updatePlayPauseButton(btn, false);
		}
	},

	updatePlayPauseButton: function(btn, isPlaying) {
		btn.innerHTML = isPlaying ?
			'<svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"/></svg>' :
			'<svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.109V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>';
	},

	formatTime: function(seconds) {
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	},

	updateProgress: function() {
		const container = document.querySelector('.audio-upload-area');
		const progressBar = container.querySelector('.progress');
		const currentTimeElement = container.querySelector('.current-time');

		const progress = (this.audioElement.currentTime / this.audioElement.duration) * 100;
		progressBar.style.width = `${progress}%`;
		currentTimeElement.textContent = this.formatTime(this.audioElement.currentTime);
	},

	updateDuration: function() {
		const container = document.querySelector('.audio-upload-area');
		const durationElement = container.querySelector('.duration');
		durationElement.textContent = this.formatTime(this.audioElement.duration);
	},

	seek: function(event) {
		if (!this.audioElement) return;

		const progressBar = event.currentTarget;
		const rect = progressBar.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const width = rect.width;
		const percentage = x / width;

		this.audioElement.currentTime = percentage * this.audioElement.duration;
	},

	removeAudio: function() {
		const container = document.querySelector('.audio-upload-area');
		const playerContainer = container.querySelector('.audio-player-container');
		const input = container.querySelector('input[type="file"]');

		if (this.audioElement) {
			this.audioElement.pause();
			this.audioElement = null;
		}

		input.value = '';
		container.classList.remove('has-audio');
		playerContainer.style.display = 'none';
	}
};

function previewImage(input) {
	const container = input.closest('.file-upload-area');
	const preview = container.querySelector('#imagePreview');
	const uploadText = container.querySelector('.upload-text');
	const removeButton = container.querySelector('.remove-image');

	if (input.files && input.files[0]) {
		const reader = new FileReader();

		reader.onload = function(e) {
			preview.src = e.target.result;
			preview.style.display = 'block';
			removeButton.style.display = 'flex';
			uploadText.style.display = 'none';
			container.style.borderColor = '#666666';
			container.style.background = '#383838';
			container.classList.add('has-image'); // Add class to indicate image presence
		};

		reader.readAsDataURL(input.files[0]);
	}
}

function removeImage(button) {
	const container = button.closest('.file-upload-area');
	const preview = container.querySelector('#imagePreview');
	const input = container.querySelector('input[type="file"]');
	const uploadText = container.querySelector('.upload-text');

	// Reset image preview
	preview.src = '';
	preview.style.display = 'none';

	// Reset file input
	input.value = '';

	// Reset remove button
	button.style.display = 'none';

	// Show upload text again
	uploadText.style.display = 'block';

	// Reset container styles
	container.style.borderColor = '#505050';
	container.style.background = 'rgba(14, 15, 17, 0.6)';
	container.classList.remove('has-image'); // Remove class indicating image presence
}

function initializeDragDropListener() {
	const fileUploadAreas = document.querySelectorAll('.file-upload-area');

	fileUploadAreas.forEach(area => {
		area.addEventListener('dragover', (e) => {
			e.preventDefault();
			// Only add drop-active class if there's no image
			if (!area.classList.contains('has-image')) {
				area.classList.add('drop-active');
			}
		});

		area.addEventListener('dragleave', (e) => {
			e.preventDefault();
			area.classList.remove('drop-active');
		});

		area.addEventListener('drop', (e) => {
			e.preventDefault();
			// Only process drop if there's no image
			if (!area.classList.contains('has-image')) {
				const input = area.querySelector('input[type="file"]');
				if (e.dataTransfer.files && e.dataTransfer.files[0]) {
					input.files = e.dataTransfer.files;
					previewImage(input);
				}
			}
		});
	});
}

function initializeEventListeners() {
	document.getElementById("search").addEventListener("input", filterTable);
	const endpointCells = document.querySelectorAll('table .endpoint');

	endpointCells.forEach(cell => {
		cell.addEventListener('click', function() {
			console.log('Cell clicked:', this);
			toggleDetails(this);
		});
	});
}

document.addEventListener('DOMContentLoaded', async function() {
    if(isDebug) debugger;
	const tables = {
		ai: document.querySelector('#aiTable tbody'),
		downloader: document.querySelector('#downloaderTable tbody'),
		tools: document.querySelector('#toolsTable tbody'),
		search: document.querySelector('#searchTable tbody'),
	};

	dataDetails.forEach(item => {
		const row = document.createElement('tr');
		row.innerHTML = `
        <td class="method-${item.method.toLowerCase()}">${item.method}</td>
        <td class="endpoint" href="#" data-detail-id="${item.detailId}"><button class="btn-glow">${item.endpoint}</button></td>
        <td></i> ${item.description}</td>
        <td>${item.hasDemo ? `<button class="endpoint btn btn-secondary" data-detail-id="demo${item.hasDemo.match(/\d+/)[0]}">Demo</button>` : ''}</td>
      `;
		tables[item.tag].appendChild(row);
	});
	
	try {

		const templatePromises = templateFiles.map(file =>
			fetch(file).then(response => {
				if (!response.ok) throw new Error(`Failed to fetch ${file}`);
				return response.text();
			})
		);
		const templates = await Promise.all(templatePromises);

		document.getElementById('templateContainer').innerHTML = templates.join(" ");

		initializeEventListeners();
	} catch (error) {
		console.error('Error loading templates:', error);
	}
	
	const loaderBox = document.getElementById('loader-box');
    if(isDebug) debugger;
	setTimeout(function() {
		const savedLang = localStorage.getItem('selectedLang') || 'ID';
		changeLanguage(savedLang, false);
		document.getElementById('preloader').style.display = 'none';
	}, 2000);

});

function toggleDropdown() {
	const dropdownOptions = document.querySelector('.dropdown-options');
	const dropdownArrow = document.querySelector('.select-dropdown-arrow');

	dropdownOptions.classList.toggle('show');

	dropdownArrow.classList.toggle('rotate');
}

function selectOption(element, value) {
	document.querySelector('.dropdown-selected .option-selected').innerHTML = element.textContent + '<i style="margin-left: 3px; font-size: 0.74rem;" class="fa fa-solid fa-check"></i>';

	document.getElementById('type').value = value;

	document.querySelector('.dropdown-options').classList.remove('show');
	document.querySelector('.select-dropdown-arrow').classList.remove('rotate');
}


// Setup drag and drop
function addUploadAreaListeners() {
	const uploadArea = document.querySelector('.audio-upload-area');

	uploadArea.addEventListener('dragover', (e) => {
		e.preventDefault();
		if (!uploadArea.classList.contains('has-audio')) {
			uploadArea.classList.add('drop-active');
		}
	});

	uploadArea.addEventListener('dragleave', (e) => {
		e.preventDefault();
		uploadArea.classList.remove('drop-active');
	});

	uploadArea.addEventListener('drop', (e) => {
		e.preventDefault();
		uploadArea.classList.remove('drop-active');

		if (!uploadArea.classList.contains('has-audio')) {
			const input = uploadArea.querySelector('input[type="file"]');
			if (e.dataTransfer.files && e.dataTransfer.files[0]) {
				input.files = e.dataTransfer.files;
				AudioPlayer.handleAudioUpload(input);
			}
		}
	});
}

function changeLanguage(selectedLang, load = true) {
	localStorage.setItem('selectedLang', selectedLang);
	if (load) {
		document.getElementById('preloader').style.display = 'flex'
	}
	document.querySelectorAll('[data-translate]').forEach(element => {
		const key = element.getAttribute('data-translate');
		element.innerHTML = translations?.[selectedLang]?.[key] || element.innerHTML;
	});
	load && setTimeout(function() {
		document.getElementById('preloader').style.display = 'none';
	}, 2000);

	document.getElementById('languageButton').textContent = `${translations[selectedLang].emoji} ${translations[selectedLang].name}`

	document.getElementById('languageDropdown').classList.remove("show");
}

function toggleDropdown() {
	const dropdown = document.getElementById("languageDropdown");

	if (dropdown.classList.contains("show")) {
		dropdown.classList.remove("show");
	} else {
		document.getElementById("languageDropdown").classList.add("show");
	}
}

function searchDropdown() {
	const dropdown = document.getElementById("searchDropdown");

	if (dropdown.classList.contains("show")) {
		dropdown.classList.remove("show");
	} else {
		document.getElementById("searchDropdown").classList.add("show");
	}
}

async function submitBuyKey(plan, price) {
	localStorage.setItem('selectedPlan', JSON.stringify({
		price: price,
		plan: plan
	}));
	setTimeout(function() {
		window.location.href = "/buy-key";
	}, 400);
}


document.querySelectorAll('.hover-link').forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		const href = this.getAttribute('href');

		this.classList.add('active');
		setTimeout(function() {
			window.location.href = href;
		}, 400);
	});
});

function updateScreenSize() {
	const screenSizeElement = document.getElementById('screenSize');
	screenSizeElement.textContent = `Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`;
}

window.onload = updateScreenSize;
window.onresize = updateScreenSize;
