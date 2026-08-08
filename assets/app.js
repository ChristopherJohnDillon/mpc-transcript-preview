const INDEX_HTML = "<header><div class=\"wrap\">\n  <p class=\"eyebrow\">My Perfect Console</p>\n  <h1>Transcripts</h1>\n\n  <p class=\"byline\">164 episodes, transcribed and speaker-labelled from the audio.</p>\n</div></header>\n<nav class=\"wrap nav\"><a href=\"index.html\" aria-current=\"page\">Transcripts</a>\n  <a href=\"stats.html\">Numbers</a><a href=\"method.html\">How</a></nav>\n<main class=\"wrap\">\n  <p class=\"lede\">Search the whole archive at once, or just open an episode and read it. Every\n     transcript shows who's talking, when, and which of the five games they're on.</p>\n  <div class=\"tools\">\n    <label for=\"q\" class=\"hidden\">Search all transcripts</label>\n    <input type=\"search\" id=\"q\" placeholder=\"Search all 164 transcripts\" autocomplete=\"off\">\n    <p class=\"status\" id=\"status\"></p>\n  </div>\n  <div id=\"results\"></div>\n  <p class=\"filter\"><label for=\"ff\" class=\"hidden\">Filter the list</label>\n     <input type=\"search\" id=\"ff\" placeholder=\"Filter by guest, console or year\"\n            autocomplete=\"off\"><span id=\"fcount\"></span></p>\n  <ul class=\"grid\" id=\"grid\"><li><a class=\"card\" href=\"e/001.html\"><span class=\"num\">Episode 1</span><p class=\"name\">Josh Wardle</p><span class=\"sub\">Wordle 2 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/002.html\"><span class=\"num\">Episode 2</span><p class=\"name\">Ashly Burch</p><span class=\"sub\">SmashBox 720 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/003.html\"><span class=\"num\">Episode 3</span><p class=\"name\">Dara \u00d3 Briain</p><span class=\"sub\">DeathBox 9000 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/004.html\"><span class=\"num\">Episode 4</span><p class=\"name\">Tarn Adams</p><span class=\"sub\">Losing is Fun \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/005.html\"><span class=\"num\">Episode 5</span><p class=\"name\">Heather Anne Campbell</p><span class=\"sub\">The Only Play \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/006.html\"><span class=\"num\">Episode 6</span><p class=\"name\">Phil Fish</p><span class=\"sub\">Fez II \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/007.html\"><span class=\"num\">Episode 7</span><p class=\"name\">Shahid Ahmad</p><span class=\"sub\">ShedStation \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/008.html\"><span class=\"num\">Episode 8</span><p class=\"name\">Phil Wang</p><span class=\"sub\">The WangCube \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/009.html\"><span class=\"num\">Episode 10</span><p class=\"name\">Jake Solomon</p><span class=\"sub\">VectorVision 8000 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/010.html\"><span class=\"num\">Episode 11</span><p class=\"name\">Henk Rogers</p><span class=\"sub\">The Intelligent Game Machine \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/011.html\"><span class=\"num\">Episode 12</span><p class=\"name\">Susan Calman</p><span class=\"sub\">Calmanac \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/012.html\"><span class=\"num\">Episode 13</span><p class=\"name\">Sir Ian Livingstone</p><span class=\"sub\">Dice \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/013.html\"><span class=\"num\">Episode 14</span><p class=\"name\">Erik Wolpaw</p><span class=\"sub\">The Hellraiser \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/014.html\"><span class=\"num\">Episode 15</span><p class=\"name\">Grace Curtis</p><span class=\"sub\">The Story Box \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/015.html\"><span class=\"num\">Episode 16</span><p class=\"name\">Charles Cecil MBE</p><span class=\"sub\">The Humdinger \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/016.html\"><span class=\"num\">Episode 17</span><p class=\"name\">Dan Vecchitto</p><span class=\"sub\">Biege 46 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/017.html\"><span class=\"num\">Episode 18</span><p class=\"name\">Ronan Farrow</p><span class=\"sub\">RonanCube \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/018.html\"><span class=\"num\">Episode 19</span><p class=\"name\">Ellie Gibson</p><span class=\"sub\">The Gibzondo \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/019.html\"><span class=\"num\">Episode 20</span><p class=\"name\">Iain Cook</p><span class=\"sub\">PickleVision 5000 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/020.html\"><span class=\"num\">Episode 21</span><p class=\"name\">Tetsuya Mizuguchi</p><span class=\"sub\">Synesthesia \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/021.html\"><span class=\"num\">Episode 22</span><p class=\"name\">Danny Pudi</p><span class=\"sub\">No Sleep \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/022.html\"><span class=\"num\">Episode 23</span><p class=\"name\">Kelsey Lewin</p><span class=\"sub\">WonderGoose \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/023.html\"><span class=\"num\">Episode 24</span><p class=\"name\">Sooz Kempner</p><span class=\"sub\">The Kempnus \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/024.html\"><span class=\"num\">Episode 25</span><p class=\"name\">Tom Bissell</p><span class=\"sub\">The Parkinator \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/025.html\"><span class=\"num\">Episode 26</span><p class=\"name\">Greg Kasavin</p><span class=\"sub\">Neo-5 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/026.html\"><span class=\"num\">Episode 27</span><p class=\"name\">J\u00f6rg Tittel</p><span class=\"sub\">The Cosmos \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/027.html\"><span class=\"num\">Episode 28</span><p class=\"name\">Marie Le Conte - Political Journalist</p><span class=\"sub\">The M.L.Cube \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/028.html\"><span class=\"num\">Episode 29</span><p class=\"name\">Glenn Moore</p><span class=\"sub\">God 2 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/029.html\"><span class=\"num\">Episode 30</span><p class=\"name\">Dylan Cuthbert</p><span class=\"sub\">Hyper Blue \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/031.html\"><span class=\"num\">Episode 32</span><p class=\"name\">Dominic Armato</p><span class=\"sub\">Super Famidom \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/032.html\"><span class=\"num\">Episode 33</span><p class=\"name\">Paul Chowdhry</p><span class=\"sub\">Choice Consoles \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/033.html\"><span class=\"num\">Episode 34</span><p class=\"name\">Joseph Mackertich</p><span class=\"sub\">Seraya Korobka \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/034.html\"><span class=\"num\">Episode 35</span><p class=\"name\">Sam Barlow</p><span class=\"sub\">The Playbook \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/035.html\"><span class=\"num\">Episode 36</span><p class=\"name\">Stella Wisdom</p><span class=\"sub\">Bookshelf Portal \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/036.html\"><span class=\"num\">Episode 37</span><p class=\"name\">Frank Lantz</p><span class=\"sub\">The Solution Machine \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/037.html\"><span class=\"num\">Episode 38</span><p class=\"name\">Peter Molyneux O.B.E</p><span class=\"sub\">The Exaggerator \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/038.html\"><span class=\"num\">Episode 39</span><p class=\"name\">Clint Hocking</p><span class=\"sub\">The Non-sole \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/040.html\"><span class=\"num\">Episode 40</span><p class=\"name\">Annabel Ashalley-Anthony</p><span class=\"sub\">Evolve \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/041.html\"><span class=\"num\">Episode 41</span><p class=\"name\">Kieron Gillen</p><span class=\"sub\">The Cyrillic Megabit \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/042.html\"><span class=\"num\">Episode 42</span><p class=\"name\">Jennifer Hale</p><span class=\"sub\">\"he Just Getting Started \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/043.html\"><span class=\"num\">Episode 43</span><p class=\"name\">Pierre Novellie</p><span class=\"sub\">The History Dweeb 3000 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/045.html\"><span class=\"num\">Episode 45</span><p class=\"name\">Lucas Pope</p><span class=\"sub\">The ParkinStation \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/046.html\"><span class=\"num\">Episode 46</span><p class=\"name\">Meghna Jayanth</p><span class=\"sub\">Squenix \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/047.html\"><span class=\"num\">Episode 47</span><p class=\"name\">Naomi Alderman</p><span class=\"sub\">Doors To Fantastic Worlds \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/049.html\"><span class=\"num\">Episode 48</span><p class=\"name\">Bryan Lee O'Malley</p><span class=\"sub\">Puffin \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/050.html\"><span class=\"num\">Episode 49</span><p class=\"name\">Jason Schreier</p><span class=\"sub\">Press Sneak Box \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/052.html\"><span class=\"num\">Episode 50</span><p class=\"name\">Mike Rose</p><span class=\"sub\">P\u00fc \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/053.html\"><span class=\"num\">Episode 51</span><p class=\"name\">Iain Stirling</p><span class=\"sub\">Final Fantasy VII \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/054.html\"><span class=\"num\">Episode 52</span><p class=\"name\">Josh Scherr</p><span class=\"sub\">The Verbosity \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/055.html\"><span class=\"num\">Episode 53</span><p class=\"name\">Nolan Bushnell</p><span class=\"sub\">Zip 22 \u00b7 2023</span></a></li><li><a class=\"card\" href=\"e/059.html\"><span class=\"num\">Episode 54</span><p class=\"name\">Gary Whitta</p><span class=\"sub\">The Fun Box \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/060.html\"><span class=\"num\">Episode 55</span><p class=\"name\">Iain Lee</p><span class=\"sub\">The Kimbo 2002 \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/061.html\"><span class=\"num\">Episode 56</span><p class=\"name\">Helen Macdonald</p><span class=\"sub\">Traumatron \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/062.html\"><span class=\"num\">Episode 57</span><p class=\"name\">Rod Fergusson</p><span class=\"sub\">The Closer \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/063.html\"><span class=\"num\">Episode 58</span><p class=\"name\">Yoshinori Kitase</p><span class=\"sub\">Detective Maruki \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/064.html\"><span class=\"num\">Episode 59</span><p class=\"name\">Patrick House</p><span class=\"sub\">Patrick's Video Game Console \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/065.html\"><span class=\"num\">Episode 60</span><p class=\"name\">Val McDermid</p><span class=\"sub\">Magic Box \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/067.html\"><span class=\"num\">Episode 62</span><p class=\"name\">Jack Thompson</p><span class=\"sub\">KillBox \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/069.html\"><span class=\"num\">Episode 63</span><p class=\"name\">Wes Fenlon</p><span class=\"sub\">NetCube \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/071.html\"><span class=\"num\">Episode 64</span><p class=\"name\">Siobhan Reddy</p><span class=\"sub\">Reddy's Horrifying Box of Glitter and Doom \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/072.html\"><span class=\"num\">Episode 65</span><p class=\"name\">John Johanas</p><span class=\"sub\">The Cosmic Horror Cast \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/073.html\"><span class=\"num\">Episode 66</span><p class=\"name\">Sarah Keyworth</p><span class=\"sub\">Cousin Jack \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/075.html\"><span class=\"num\">Episode 67</span><p class=\"name\">Masaya Matsuura</p><span class=\"sub\">The Collaborator \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/076.html\"><span class=\"num\">Episode 68</span><p class=\"name\">Keith Stuart</p><span class=\"sub\">Maths Bugger \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/077.html\"><span class=\"num\">Episode 69</span><p class=\"name\">Teddy Dief</p><span class=\"sub\">The GoodCube \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/079.html\"><span class=\"num\">Episode 70</span><p class=\"name\">Veronica Roth</p><span class=\"sub\">The V Machine \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/081.html\"><span class=\"num\">Episode 71</span><p class=\"name\">Chet Faliszek</p><span class=\"sub\">Left4Dead 3 \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/082.html\"><span class=\"num\">Episode 72</span><p class=\"name\">Abubakar Salim</p><span class=\"sub\">The SoulStation \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/083.html\"><span class=\"num\">Episode 73</span><p class=\"name\">Nina Freeman</p><span class=\"sub\">Mid-2000s Chaos \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/084.html\"><span class=\"num\">Episode 74</span><p class=\"name\">Eric Barone</p><span class=\"sub\">The Mystery Box \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/086.html\"><span class=\"num\">Episode 75</span><p class=\"name\">Michael Sherman</p><span class=\"sub\">The Inifinibobs \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/088.html\"><span class=\"num\">Episode 76</span><p class=\"name\">Mike Drucker</p><span class=\"sub\">Big Foot \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/089.html\"><span class=\"num\">Episode 77</span><p class=\"name\">Kelsey Beachum</p><span class=\"sub\">The Outer Whimsy \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/090.html\"><span class=\"num\">Episode 78</span><p class=\"name\">Richard Sparks</p><span class=\"sub\">New rock, New role \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/091.html\"><span class=\"num\">Episode 79</span><p class=\"name\">Rhianna Pratchett</p><span class=\"sub\">Grump \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/093.html\"><span class=\"num\">Episode 80</span><p class=\"name\">Steve Meretszky</p><span class=\"sub\">Forty-two \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/095.html\"><span class=\"num\">Episode 81</span><p class=\"name\">Luke Muscat</p><span class=\"sub\">The Luke Muscat Console \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/097.html\"><span class=\"num\">Episode 82</span><p class=\"name\">Holly Gramazio</p><span class=\"sub\">The Nice Little Games Console \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/098.html\"><span class=\"num\">Episode 83</span><p class=\"name\">Maddy Thorson</p><span class=\"sub\">The Maddy Machine \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/100.html\"><span class=\"num\">Episode 84</span><p class=\"name\">Eliot Higgins</p><span class=\"sub\">The Dadcast \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/101.html\"><span class=\"num\">Episode 85</span><p class=\"name\">Chris Deering</p><span class=\"sub\">The Third Place \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/103.html\"><span class=\"num\">Episode 86</span><p class=\"name\">Derek Yu</p><span class=\"sub\">The You're Not the Center of the Universe Console \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/104.html\"><span class=\"num\">Episode 87</span><p class=\"name\">Uwe Boll</p><span class=\"sub\">The Uwe Boll Undergroundtron \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/106.html\"><span class=\"num\">Episode 88</span><p class=\"name\">Eugene Jarvis</p><span class=\"sub\">Fortbobble \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/107.html\"><span class=\"num\">Episode 89</span><p class=\"name\">Nainita Desai</p><span class=\"sub\">Trocofuturo World \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/108.html\"><span class=\"num\">Episode 90</span><p class=\"name\">Danny Wallace</p><span class=\"sub\">The Mega Danny \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/109.html\"><span class=\"num\">Episode 91</span><p class=\"name\">Hannah Nicklin</p><span class=\"sub\">Dasein \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/110.html\"><span class=\"num\">Episode 92</span><p class=\"name\">Pitof Comar</p><span class=\"sub\">Fly Me \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/112.html\"><span class=\"num\">2024-11-04</span><p class=\"name\">Matt Firor</p><span class=\"sub\">Pandora \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/113.html\"><span class=\"num\">Episode 94</span><p class=\"name\">Sarah Elmaleh</p><span class=\"sub\">The Mass Uncharted Curse of Super Kentucky \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/114.html\"><span class=\"num\">Episode 95</span><p class=\"name\">Corinne Busche</p><span class=\"sub\">The Ultra-Autonomy 2000 \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/115.html\"><span class=\"num\">2024-11-25</span><p class=\"name\">Andy McNamara</p><span class=\"sub\">Andy's Awesome Console \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/117.html\"><span class=\"num\">Episode 97</span><p class=\"name\">Jordan Mechner</p><span class=\"sub\">The 20th Century \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/119.html\"><span class=\"num\">Episode 98</span><p class=\"name\">Billy Basso</p><span class=\"sub\">The Dazzle Bear \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/120.html\"><span class=\"num\">Episode 99</span><p class=\"name\">G. T. Karber</p><span class=\"sub\">The Gregcast \u00b7 2024</span></a></li><li><a class=\"card\" href=\"e/125.html\"><span class=\"num\">Episode 100</span><p class=\"name\">Daniel Pemberton</p><span class=\"sub\">Game Station 3000 \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/126.html\"><span class=\"num\">Episode 101</span><p class=\"name\">Adanna Nedd</p><span class=\"sub\">August \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/127.html\"><span class=\"num\">2025-02-17</span><p class=\"name\">Basia Bu\u0142at</p><span class=\"sub\">Basia Palace \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/129.html\"><span class=\"num\">Episode 103</span><p class=\"name\">Dr. Greg Zeschuk</p><span class=\"sub\">RPG-Only \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/131.html\"><span class=\"num\">Episode 104</span><p class=\"name\">Steffan Powell</p><span class=\"sub\">The Mega Bundle 5 \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/132.html\"><span class=\"num\">Episode 105</span><p class=\"name\">Marjolein Robertson</p><span class=\"sub\">The Super Mario Station Computer \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/133.html\"><span class=\"num\">Episode 106</span><p class=\"name\">Keith Burns</p><span class=\"sub\">Memory block 374 \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/134.html\"><span class=\"num\">Episode 107</span><p class=\"name\">Seamus Blackley</p><span class=\"sub\">The Bunduss \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/136.html\"><span class=\"num\">Episode 108</span><p class=\"name\">Saraya Bevis</p><span class=\"sub\">Glampire \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/137.html\"><span class=\"num\">Episode 109</span><p class=\"name\">Joel Morris</p><span class=\"sub\">Mutard Screen Genie \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/138.html\"><span class=\"num\">Episode 110</span><p class=\"name\">Celia Hodent</p><span class=\"sub\">The video games as companions for life \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/140.html\"><span class=\"num\">Episode 111</span><p class=\"name\">Guillaume Provost</p><span class=\"sub\">Odds and Ends \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/141.html\"><span class=\"num\">Episode 112</span><p class=\"name\">Liam Wong</p><span class=\"sub\">After Dark \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/143.html\"><span class=\"num\">Episode 113</span><p class=\"name\">Alex Kealy</p><span class=\"sub\">The Procrastinator 5000 \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/144.html\"><span class=\"num\">Episode 114</span><p class=\"name\">Grentperez</p><span class=\"sub\">The Backflip \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/145.html\"><span class=\"num\">Episode 115</span><p class=\"name\">Tomm Hulett</p><span class=\"sub\">Atomix \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/146.html\"><span class=\"num\">Episode 116</span><p class=\"name\">Bennett Foddy</p><span class=\"sub\">The Indietron 2007 \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/150.html\"><span class=\"num\">Episode 118</span><p class=\"name\">Robbie Singh</p><span class=\"sub\">Nostalgia \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/151.html\"><span class=\"num\">Episode 119</span><p class=\"name\">Ray Chase</p><span class=\"sub\">LX Chase \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/152.html\"><span class=\"num\">Episode 120</span><p class=\"name\">Peter Whalen</p><span class=\"sub\">The Raid \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/154.html\"><span class=\"num\">Episode 121</span><p class=\"name\">Cabel Sasser</p><span class=\"sub\">PlayDate \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/155.html\"><span class=\"num\">Episode 122</span><p class=\"name\">Ed Night</p><span class=\"sub\">Switch 8 \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/156.html\"><span class=\"num\">Episode 123</span><p class=\"name\">Jimi Famurewa</p><span class=\"sub\">Picktendo \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/157.html\"><span class=\"num\">Episode 124</span><p class=\"name\">Kat Abughazaleh</p><span class=\"sub\">Stripey Girl \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/158.html\"><span class=\"num\">Episode 125</span><p class=\"name\">Nathan Brown</p><span class=\"sub\">The Cool Box \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/160.html\"><span class=\"num\">Episode 126</span><p class=\"name\">Greg Jenner</p><span class=\"sub\">Control Freak \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/161.html\"><span class=\"num\">Episode 127</span><p class=\"name\">Ralph Panebianco</p><span class=\"sub\">SkillBox \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/163.html\"><span class=\"num\">Episode 128</span><p class=\"name\">Brian Gibson</p><span class=\"sub\">The Brutalist \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/164.html\"><span class=\"num\">Episode 129</span><p class=\"name\">Tonda Ros</p><span class=\"sub\">DazzleBear \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/166.html\"><span class=\"num\">Episode 130</span><p class=\"name\">Jonathan Jacques-Bellet\u00eate</p><span class=\"sub\">BelleteteCube \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/167.html\"><span class=\"num\">Episode 131</span><p class=\"name\">Lizzie Killian</p><span class=\"sub\">The Troublemaker \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/168.html\"><span class=\"num\">Episode 132</span><p class=\"name\">Andy Robertson</p><span class=\"sub\">The Playground \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/169.html\"><span class=\"num\">Episode 133</span><p class=\"name\">Charlie Rosen</p><span class=\"sub\">The PowerStation 9000 \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/171.html\"><span class=\"num\">Episode 134</span><p class=\"name\">Alexander O. Smith</p><span class=\"sub\">Final Fantasy \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/172.html\"><span class=\"num\">Episode 135</span><p class=\"name\">Claire L. Evans</p><span class=\"sub\">Exploring a Digital World \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/173.html\"><span class=\"num\">Episode 136</span><p class=\"name\">Chris Plante</p><span class=\"sub\">The Houseplante \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/174.html\"><span class=\"num\">Episode 137</span><p class=\"name\">Lorien Testard</p><span class=\"sub\">ImpossibleCube \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/175.html\"><span class=\"num\">Episode 138</span><p class=\"name\">Rami Ismail</p><span class=\"sub\">SpelDoos \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/177.html\"><span class=\"num\">Episode 139</span><p class=\"name\">Danny Abbasi</p><span class=\"sub\">Vidkid Phantom Ultra \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/178.html\"><span class=\"num\">Episode 140</span><p class=\"name\">Shuhei Yoshida</p><span class=\"sub\">IndieStation \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/179.html\"><span class=\"num\">Episode 141</span><p class=\"name\">Andy Davidson</p><span class=\"sub\">WormStation \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/181.html\"><span class=\"num\">Episode 142</span><p class=\"name\">Brandon Adler</p><span class=\"sub\">The Funbox 2000 \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/183.html\"><span class=\"num\">Episode 143</span><p class=\"name\">Mark Cerny</p><span class=\"sub\">RNG Unit \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/185.html\"><span class=\"num\">Episode 145</span><p class=\"name\">Harvey Smith</p><span class=\"sub\">Echo Deck \u00b7 2025</span></a></li><li><a class=\"card\" href=\"e/193.html\"><span class=\"num\">Episode 148</span><p class=\"name\">Dr. Elin Fest\u00f8y</p><span class=\"sub\">The Full Circle \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/194.html\"><span class=\"num\">Episode 149</span><p class=\"name\">Prokop Jirsa</p><span class=\"sub\">DreamWorld \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/195.html\"><span class=\"num\">Episode 150</span><p class=\"name\">Ed Fries</p><span class=\"sub\">MoistBox \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/197.html\"><span class=\"num\">Episode 151</span><p class=\"name\">Keza Macdonald</p><span class=\"sub\">Super Keztendo \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/198.html\"><span class=\"num\">Episode 152</span><p class=\"name\">Tom Keegan</p><span class=\"sub\">Human Journey on Earth \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/199.html\"><span class=\"num\">Episode 153</span><p class=\"name\">Ed Atkins</p><span class=\"sub\">Sorcerer \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/202.html\"><span class=\"num\">Episode 155</span><p class=\"name\">Felicia Day</p><span class=\"sub\">The Endless Hole \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/203.html\"><span class=\"num\">Episode 156</span><p class=\"name\">Michael French MBE</p><span class=\"sub\">The Festival at Home \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/204.html\"><span class=\"num\">Episode 157</span><p class=\"name\">C. Thi. Nguyen</p><span class=\"sub\">The Score: The Console \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/205.html\"><span class=\"num\">Episode 158</span><p class=\"name\">Simon Lockerby</p><span class=\"sub\">Old School \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/206.html\"><span class=\"num\">Episode 159</span><p class=\"name\">Natasha Hodgson</p><span class=\"sub\">Weird Little Team \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/208.html\"><span class=\"num\">Episode 160</span><p class=\"name\">Chandana Ekanayake</p><span class=\"sub\">Atlas \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/209.html\"><span class=\"num\">Episode 161</span><p class=\"name\">Jerk Gustafsson</p><span class=\"sub\">The Games Machine \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/210.html\"><span class=\"num\">Episode 162</span><p class=\"name\">Stephen Totilo</p><span class=\"sub\">TwinStation \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/211.html\"><span class=\"num\">Episode 163</span><p class=\"name\">Brendan Greene</p><span class=\"sub\">The Unknown Console \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/214.html\"><span class=\"num\">Episode 164</span><p class=\"name\">Elise Kova</p><span class=\"sub\">2026</span></a></li><li><a class=\"card\" href=\"e/216.html\"><span class=\"num\">Episode 165</span><p class=\"name\">Gabr\u00edel \u00d3lafs</p><span class=\"sub\">2026</span></a></li><li><a class=\"card\" href=\"e/217.html\"><span class=\"num\">Episode 166</span><p class=\"name\">George Osborn</p><span class=\"sub\">2026</span></a></li><li><a class=\"card\" href=\"e/218.html\"><span class=\"num\">Episode 167</span><p class=\"name\">Rob Dubbin</p><span class=\"sub\">2026</span></a></li><li><a class=\"card\" href=\"e/220.html\"><span class=\"num\">Episode 168</span><p class=\"name\">Luke Whittaker</p><span class=\"sub\">2026</span></a></li><li><a class=\"card\" href=\"e/221.html\"><span class=\"num\">Episode 169</span><p class=\"name\">Abigoliah Schamaun</p><span class=\"sub\">Tentative Optimist 64 \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/222.html\"><span class=\"num\">Episode 170</span><p class=\"name\">Andreas Thorstensson</p><span class=\"sub\">the master console \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/223.html\"><span class=\"num\">Episode 171</span><p class=\"name\">John Robertson</p><span class=\"sub\">2026</span></a></li><li><a class=\"card\" href=\"e/224.html\"><span class=\"num\">2026-07-27</span><p class=\"name\">Pierce Brown</p><span class=\"sub\">Imagination Station \u00b7 2026</span></a></li><li><a class=\"card\" href=\"e/226.html\"><span class=\"num\">2026-08-04</span><p class=\"name\">James Trickey</p><span class=\"sub\">high value assets \u00b7 2026</span></a></li></ul>\n</main>\n<footer class=\"wrap\">\n  <p>Transcribed automatically from the published episode audio. Patreon episodes aren't\n     included. <a href=\"method.html\">How this was made</a>.</p>\n</footer>";

const GATE = (() => {
  let key = null;
  const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));

  async function derive(password, cfg){
    const material = await crypto.subtle.importKey(
      'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey(
      {name:'PBKDF2', salt:b64(cfg.salt), iterations:cfg.iterations, hash:'SHA-256'},
      material, {name:'AES-GCM', length:256}, false, ['decrypt']);
  }
  async function open(blob){
    const raw = b64(blob);
    const plain = await crypto.subtle.decrypt(
      {name:'AES-GCM', iv:raw.slice(0,12)}, key, raw.slice(12));
    const stream = new Blob([plain]).stream()
      .pipeThrough(new DecompressionStream('gzip'));
    return new Response(stream).text();
  }
  // A wrong password fails as a GCM tag mismatch, which is how we tell: there is no separate
  // check to get out of step with the data.
  async function unlock(password, cfg, probe){
    key = await derive(password, cfg);
    try { await open(probe); return true; } catch { key = null; return false; }
  }
  return {unlock, open, ready: () => key !== null};
})();

async function gateBoot(onReady){
  const cfg = await (await fetch(ROOT + 'gate.json?v=' + VER)).json();
  const probe = cfg.probe;
  const form = document.getElementById('gate');
  const input = document.getElementById('pw');
  const note = document.getElementById('gate-note');

  async function tryPassword(password, remember){
    if (!await GATE.unlock(password, cfg, probe)) return false;
    if (remember) sessionStorage.setItem('mpc-pw', password);
    form.remove();
    document.body.classList.remove('locked');
    await onReady();
    return true;
  }
  const saved = sessionStorage.getItem('mpc-pw');
  if (saved && await tryPassword(saved, false)) return;
  sessionStorage.removeItem('mpc-pw');

  form.hidden = false;
  input.focus();
  form.addEventListener('submit', async e => {
    e.preventDefault();
    note.textContent = 'Checking…';
    if (!await tryPassword(input.value, true)) {
      note.textContent = 'That password does not work.';
      input.select();
    }
  });
}
const METHOD_HTML = "\n<header><div class=\"wrap\">\n  <p class=\"eyebrow\">My Perfect Console</p>\n  <h1>How this was made</h1>\n  <p class=\"byline\">Two speech recognisers, a diariser and a forced aligner, run locally on\n     M-chip Macs. No audio leaves the desk and no transcription service sees the show.</p>\n</div></header>\n<nav class=\"wrap nav\"><a href=\"index.html\">Transcripts</a><a href=\"stats.html\">Numbers</a>\n  <a href=\"method.html\" aria-current=\"page\">How</a></nav>\n<main class=\"wrap stats\">\n  <h2>Hearing the words</h2>\n  <p class=\"note\">Whisper and the recogniser built into macOS both transcribe every episode.\n     They fail differently, which is the point: where they disagree, forced alignment goes back\n     to the waveform and decides which version the audio actually supports.</p>\n  <p class=\"note\">Recognisers hallucinate when there's nothing to hear &mdash; \"Thank you.\" a\n     dozen times over the theme music, a phrase repeated until the clip ends, and in one episode\n     eight minutes of capitals with the punctuation gone. Those get flagged and set aside rather\n     than deleted. Where one engine has a passage the other mangled, it gets swapped in.</p>\n\n  <h2>Who's speaking</h2>\n  <p class=\"note\">Diarisation splits the audio by voice; voiceprints attach the names. Simon\n     recurs across every episode so he's known outright, and a guest is learned from the episode\n     itself. Short interjections and crosstalk are where it breaks.</p>\n\n  <h2>Finding the five games</h2>\n  <p class=\"note\">The show's own records say which five games were picked. The transcript is\n     asked only where each one is named &mdash; a much easier question, and a checkable one.\n     Announcements have a signature: the guest names the game, its music plays a few seconds\n     later.</p>\n  <p class=\"note\">Most of the work is reconciling spelling. The records say \"Pok&eacute;mon\n     Crystal\", the audio says \"Pokemon Crystal\". The records say \"Wizards &amp; Warriors\", the\n     guest says \"Wizards and Warriors\". Whisper hears \"Caves of Cud\" for Caves of Qud and\n     \"fantasy star online\" for Phantasy Star Online. About one pick in sixteen still can't be\n     placed, usually because the title is never quite said out loud.</p>\n\n  <h2>What it gets wrong</h2>\n  <p class=\"note\">Names are the weakest point: unfamiliar surnames and obscure titles come out\n     phonetically. Speaker labels are occasionally wrong. Timings are close, not exact.</p>\n  <p class=\"note\">Timestamps are measured against the ad-free audio, so they drift against the\n     public feed. Only openly released episodes are here &mdash; Patreon episodes aren't\n     included, and their text isn't stored in this site at all.</p>\n\n  <h2>The numbers</h2>\n  <p class=\"note\">Everything on the Numbers page is derived from these transcripts and inherits\n     their errors. Word counts are counted words; speaking share is share of words rather than of\n     measured seconds. Release years and review scores come from IGDB. The picks are the show's\n     own list, not anything inferred.</p>\n</main>\n<footer class=\"wrap\">\n  <p class=\"made\">The transcripts and this archive were made by\n     <a href=\"https://christopherdillon.me\">Chris Dillon</a>. The programme itself is Simon\n     Parkin's.</p>\n</footer>\n";

// Match the Python side: strip accents before tokenising, so "Pokemon" and "Pokémon" are one word
const fold = s => String(s).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const esc = s => String(s).replace(/[&<>"]/g, c => (
  {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function hms(t){
  t=Math.floor(t); const h=Math.floor(t/3600), m=Math.floor(t%3600/60), s=t%60;
  return h ? h+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')
           : m+':'+String(s).padStart(2,'0');
}
function roleOf(name, guest){
  return name === 'Simon Parkin' ? 'host' : (name === guest ? 'guest' : 'other');
}

// The page the reader sees, built from the same file the search reads. This mirrors poc.py's
// markup deliberately: one stylesheet has to dress both, so they cannot drift apart quietly.
function renderEpisode(d, back){
  const longest = Math.max(1, ...d.picks.map(p => p.mins));
  // A pick's timestamp comes from the extraction, not from a segment boundary, so it usually
  // falls between two lines - and an id built from it matches nothing at all. Snap to the nearest
  // line that actually exists, which is what the reader wanted anyway.
  const times = d.l.map(l => l[0]);
  const nearest = at => {
    if (!times.length) return 0;
    let best = times[0];
    for (const t of times){
      if (t <= at) best = t;
      else return (at - best) <= (t - at) ? best : t;
    }
    return best;
  };
  let h = '<nav class="wrap nav"><a href="' + ROOT + 'index.html">Transcripts</a>'
    + '<a href="' + ROOT + 'stats.html">Numbers</a>'
    + '<a href="' + ROOT + 'method.html">How</a></nav>'
    + '<header><div class="wrap">'
    + '<a class="back" href="' + back.href + '">' + esc(back.label) + '</a>'
    + '<p class="eyebrow">My Perfect Console'
    + (d.num ? ' · Episode ' + d.num : '') + '</p>'
    + '<h1>' + esc(d.title) + '</h1>'
    + '<p class="byline">With <b>' + esc(d.guest) + '</b>'
    + (d.date ? ' · ' + esc(d.date) : '') + ' · ' + d.mins + ' minutes'
    + (d.listen ? ' · <a class="listen" href="' + d.listen + '" target="_blank" rel="noopener">Listen &#8599;</a>' : '')
    + '</p>'
    + '</div></header><main class="wrap">';

  // What this episode is, in numbers: who spoke, how fast, and when.
  const st = d.stats;
  if (st){
    const strip = st.strip.split('').map((c, i) =>
      '<i class="' + (c === 'h' ? 'h' : c === 'g' ? 'g' : 'o') + '" title="'
      + hms(i * st.slice) + '"></i>').join('');
    h += '<section class="panel"><h2>This episode</h2>'
      + '<ul class="figures small">'
      + '<li class="figure"><b>' + fmt(st.words) + '</b><span>words</span></li>'
      + '<li class="figure"><b>' + st.mins + '</b><span>minutes</span></li>'
      + '<li class="figure"><b>' + st.wpm + '</b><span>words a minute</span></li>'
      + '<li class="figure"><b>' + st.host_share + '%</b><span>spoken by Simon</span></li>'
      + '</ul>'
      + '<div class="strip" role="img" aria-label="Who is speaking across the episode">'
      + strip + '</div>'
      + '<p class="cap">who\u2019s talking, start to finish — '
      + '<span class="key h">Simon</span> <span class="key g">guest</span></p>'
      + '<ul class="rows">' + st.people.map(x =>
          '<li class="row"><span class="lab">' + esc(x.name) + '</span>'
          + '<span class="val">' + x.share + '% · ' + fmt(x.words) + ' words · '
          + x.mins + ' min · ' + x.wpm + ' wpm</span>'
          + '<span class="track"><i class="fill' + (x.role === 'host' ? '' : ' g')
          + '" style="width:' + x.share + '%"></i></span></li>')
        .join('') + '</ul>'
      + '<ul class="rows sub">' + st.people.map(x =>
          '<li class="row"><span class="lab">' + esc(x.name.split(' ')[0]) + '</span>'
          + '<span class="val">' + fmt(x.turns) + ' turns · longest '
          + fmt(x.longest) + ' words · ' + fmt(x.questions) + ' questions</span></li>')
        .join('') + '</ul>';
    if (d.words && d.words.length){
      h += '<p class="cap left">Words this episode uses more than the show normally does</p>'
        + '<p class="terms">' + d.words.map(w =>
            '<button class="term" data-w="' + esc(w.w) + '">' + esc(w.w)
            + '<span>' + w.n + '</span></button>').join('') + '</p>';
    }
    h += '</section>';
  }

  h += '<section class="console"><h2>The console</h2>'
    + '<p class="name">' + esc(d.console || 'Unnamed') + '</p>';
  for (const p of d.picks){
    const w = Math.max(4, Math.round(p.mins / longest * 100));
    h += '<div class="slot"><span class="n">' + esc(p.n) + '</span>'
      + '<span class="title">' + esc(p.t) + '</span>'
      + '<span class="mins">' + Math.round(p.mins) + ' min</span>'
      + '<button class="open" data-go="t' + nearest(p.at) + '">Open</button>'
      + '<span class="bar" style="width:' + w + '%"></span></div>';
  }
  h += '<p class="foot">The five picks, and how long each one got. Open any of them to jump to'
    + ' where it comes up.</p></section>';

  // The console covers the five picks. The rest of the hour - the introduction, the naming of
  // the console, the sign-off - had no way in at all until now.
  // The console already lists the five picks with their minutes and an Open button, so a full
  // chapter list repeats all of it. Only the sections the console does NOT cover belong here:
  // the introduction, the naming of the console, and the sign-off.
  const rest = (d.ch || []).filter(c => c[2] !== 'pick');
  if (rest.length){
    h += '<nav class="chapters"><h2>Elsewhere in the episode</h2><ol>'
      + rest.map(c => '<li><button class="jump" data-go="t' + nearest(c[0]) + '">'
          + '<span class="at">' + hms(c[0]) + '</span>'
          + '<span class="what">' + esc(c[3] || c[2]) + '</span>'
          + '<span class="len">' + Math.round((c[1] - c[0]) / 60) + ' min</span>'
          + '</button></li>').join('') + '</ol></nav>';
  }

  h += '<div class="tools"><label for="q" class="hidden">Search this episode</label>'
    + '<input type="search" id="q" placeholder="Search this episode" autocomplete="off">'
    + '<p class="count" id="count"></p></div>';

  let ci = 0, last = null, out = '';
  for (const [t, wi, text] of d.l){
    while (ci < d.ch.length && d.ch[ci][0] <= t){
      const c = d.ch[ci++];
      if (last !== null){ out += '</div>'; last = null; }
      out += '<div class="chapter"><h3>' + esc(c[3] || c[2]) + '</h3>'
        + '<span class="meta">' + hms(c[0]) + ' · ' + Math.round((c[1]-c[0])/60) + ' min</span></div>';
    }
    const name = d.who[wi] || 'Unknown';
    if (name !== last){
      if (last !== null) out += '</div>';
      const role = roleOf(name, d.guest);
      out += '<div class="turn ' + role + '"><p class="who ' + role + '">' + esc(name) + '</p>';
      last = name;
    }
    out += '<div class="line" id="t' + t + '"><span class="t">' + hms(t) + '</span><p>'
      + esc(text) + '</p></div>';
  }
  if (last !== null) out += '</div>';
  const near = d.around || {};
  const step = (k, label) => k
    ? '<a class="step" href="' + ROOT + 'e/' + String(k).padStart(3,'0') + '.html">'
      + esc(label) + '</a>'
    : '<span class="step off">' + esc(label) + '</span>';
  return h + out + '</main>'
    + '<nav class="wrap walk">' + step(near.prev, '\u2190 Previous episode')
    + step(near.next, 'Next episode \u2192') + '</nav>'
    + '<footer class="wrap"><p>Transcribed automatically from the audio \u2014 speaker names'
    + ' are worked out by software, so they\u2019re occasionally wrong. '
    + '<a href="' + ROOT + 'method.html">How this was made</a>.</p></footer>';
}

function wireEpisode(){
  const q = document.getElementById('q'), count = document.getElementById('count');
  const turns = [...document.querySelectorAll('.turn')];
  const originals = turns.map(t => [...t.querySelectorAll('.line p')].map(p => p.textContent));
  q.addEventListener('input', () => {
    const term = q.value.trim().toLowerCase();
    let hits = 0;
    turns.forEach((turn, i) => {
      let any = false;
      [...turn.querySelectorAll('.line p')].forEach((p, j) => {
        const text = originals[i][j];
        if (!term){ p.textContent = text; return; }
        let at = text.toLowerCase().indexOf(term);
        if (at < 0){ p.textContent = text; return; }
        any = true;
        p.textContent = '';
        let from = 0;
        while (at >= 0){
          hits++;
          p.append(document.createTextNode(text.slice(from, at)));
          const m = document.createElement('mark'); m.textContent = text.slice(at, at+term.length);
          p.append(m);
          from = at + term.length;
          at = text.toLowerCase().indexOf(term, from);
        }
        p.append(document.createTextNode(text.slice(from)));
      });
      turn.classList.toggle('hidden', !!term && !any);
    });
    document.querySelectorAll('.chapter').forEach(c => c.classList.toggle('hidden', !!term));
    count.textContent = term ? (hits ? hits + ' mention' + (hits==1?'':'s') : 'nothing found') : '';
  });
  // Every line already has an id; nothing said so. Clicking the time copies a link to it.
  // Clicking a word searches this episode rather than throwing the reader out to the archive.
  // It also makes the number honest: the chip counts occurrences, and so does this search, while
  // the corpus search counts matching lines - which is why "b-squad" said 4 times reported 3.
  document.querySelectorAll('.term').forEach(b => b.addEventListener('click', () => {
    const q = document.getElementById('q');
    if (!q) return;
    q.value = q.value.trim().toLowerCase() === b.dataset.w ? '' : b.dataset.w;
    q.dispatchEvent(new Event('input'));
    q.scrollIntoView({behavior: 'smooth', block: 'center'});
    document.querySelectorAll('.term').forEach(o =>
      o.classList.toggle('on', o === b && q.value !== ''));
  }));

  document.querySelectorAll('.line').forEach(row => {
    const at = row.querySelector('.t');
    if (!at) return;
    at.title = 'Copy a link to this line';
    at.style.cursor = 'pointer';
    at.addEventListener('click', async () => {
      const url = location.origin + location.pathname + '#' + row.id;
      try { await navigator.clipboard.writeText(url); } catch { return; }
      const was = at.textContent;
      at.textContent = 'copied';
      setTimeout(() => at.textContent = was, 1200);
    });
  });

  document.querySelectorAll('.open, .jump').forEach(b => b.addEventListener('click', () => {
    const el = document.getElementById(b.dataset.go);
    if (!el) return;
    el.scrollIntoView({behavior:'smooth', block:'center'});
    el.style.transition = 'background .2s';
    el.style.background = 'rgba(243,177,178,.18)';
    setTimeout(() => el.style.background = '', 1400);
  }));
}

// A control that follows the reader down the page, because the header link does not.
function floatingBack(label, href){
  const a = document.createElement('a');
  a.className = 'backtop'; a.href = href; a.textContent = label;
  document.body.append(a);
  const show = () => a.classList.toggle('on', window.scrollY > 900);
  window.addEventListener('scroll', show, {passive:true});
  show();
}

const CACHE = new Map();
const STOP = new Set(["a", "about", "an", "and", "are", "as", "at", "be", "been", "but", "by", "can", "could", "did", "do", "does", "for", "from", "get", "got", "had", "has", "have", "he", "her", "him", "his", "i", "if", "in", "into", "is", "it", "its", "just", "know", "like", "me", "my", "no", "not", "now", "of", "on", "one", "or", "our", "really", "said", "say", "she", "so", "than", "that", "the", "their", "them", "then", "there", "these", "they", "think", "this", "to", "too", "us", "was", "we", "were", "what", "when", "which", "who", "will", "with", "would", "you", "your", "yours"]);
let INDEX = null, META = null;

// One reader for both builds: gated files arrive as base64 ciphertext, open ones as plain text.
async function getJSON(path){
  // Stamped with the build, because a cached file from the previous deploy was encrypted under
  // that deploy's bytes and fails in a way no reader could diagnose.
  const r = await fetch(ROOT + path + (path.includes('?') ? '&' : '?') + 'v=' + VER,
                        {cache: 'no-cache'});
  if (!r.ok) throw new Error(path + ': ' + r.status);
  if (typeof GATE === 'undefined' || !GATE.ready()) return r.json();
  return JSON.parse(await GATE.open((await r.text()).trim()));
}
async function episode(key){
  if (!CACHE.has(key)) CACHE.set(key, await getJSON('d/' + String(key).padStart(3,'0') + '.json'));
  return CACHE.get(key);
}

function initIndex(){
  const app = document.getElementById('app');
  app.innerHTML = INDEX_HTML;
  const q = document.getElementById('q'), status = document.getElementById('status');
  const results = document.getElementById('results'), grid = document.getElementById('grid');

  async function boot(){
    if (INDEX) return;
    status.textContent = 'Loading search…';
    const d = await getJSON('search/index.json');
    INDEX = d.index; META = d.episodes;
    status.textContent = '';
  }
  // Stage one narrows, stage two decides: candidates come from the index, but whether a line is a
  // hit is settled by the query as typed, so the stopwords the index dropped still count.
  function candidates(terms){
    const ix = terms.filter(t => !STOP.has(t) && t.length > 1);
    if (!ix.length) return null;
    let set = null;
    for (const t of ix){
      const s = new Set(INDEX[t] || []);
      set = set === null ? s : new Set([...set].filter(k => s.has(k)));
      if (!set.size) break;
    }
    return [...set];
  }

  let run = 0;
  async function search(){
    const term = q.value.trim();
    const mine = ++run;
    history.replaceState(null, '', term ? '?q=' + encodeURIComponent(term) : location.pathname);
    if (term.length < 2){
      results.innerHTML = ''; grid.style.display = ''; status.textContent = ''; return;
    }
    await boot();
    if (mine !== run) return;
    const keys = candidates(term.toLowerCase().match(/[a-z0-9][a-z0-9']*/g) || []);
    if (keys === null){ status.textContent = 'Try a more specific word.'; return; }
    grid.style.display = 'none';
    results.innerHTML = '';
    const needle = fold(term);
    let shown = 0, eps = 0;
    // In flights of eight. Fetched one at a time, a common word like "half" meant 122 sequential
    // round trips before the last result appeared; the work was never the decryption, it was
    // waiting. Order is preserved so results still read oldest episode first.
    const sorted = keys.sort((a,b) => a-b);
    for (let i = 0; i < sorted.length; i += 8){
      if (mine !== run) return;
      const batch = sorted.slice(i, i + 8);
      const loaded = await Promise.all(batch.map(k => episode(k).catch(() => null)));
      if (mine !== run) return;
      for (const d of loaded){
      if (!d) continue;
      const key = d.key;
      const hits = d.l.filter(l => fold(l[2]).includes(needle));
      if (!hits.length) continue;
      eps++;
      const div = document.createElement('div');
      div.className = 'result';
      const to = 'e/' + String(key).padStart(3,'0') + '.html?q=' + encodeURIComponent(term);
      div.innerHTML = '<h3><a href="' + to + '">'
        + (d.num ? 'Episode ' + d.num + ' · ' : '') + esc(d.guest || ('Episode ' + key))
        + '</a> <span class="more">' + hits.length
        + ' mention' + (hits.length==1?'':'s') + '</span></h3>';
      for (const [t, wi, text] of hits.slice(0,4)){
        const row = document.createElement('div'); row.className = 'hit';
        const a = document.createElement('a');
        a.href = to + '#t' + t; a.textContent = hms(t);
        const p = document.createElement('p');
        const at = fold(text).indexOf(needle);
        p.append(document.createTextNode((d.who[wi] ? d.who[wi] + ': ' : '') + text.slice(0, at)));
        const m = document.createElement('mark'); m.textContent = text.slice(at, at+term.length);
        p.append(m, document.createTextNode(text.slice(at + term.length)));
        row.append(a, p); div.append(row);
      }
      if (hits.length > 4){
        const p = document.createElement('p'); p.className = 'more';
        p.textContent = 'and ' + (hits.length-4) + ' more in this episode';
        div.append(p);
      }
      results.append(div);
      shown += hits.length;
      status.textContent = shown + ' mention' + (shown==1?'':'s') + ' in ' + eps
        + ' episode' + (eps==1?'':'s') + ' (still looking…)';
      }
    }
    status.textContent = shown
      ? shown + ' mention' + (shown==1?'':'s') + ' in ' + eps + ' episode' + (eps==1?'':'s')
      : 'Nothing found for “' + term + '”.';
  }
  // Filtering the list is a different job from searching the transcripts: it is instant, local,
  // and answers "which episode was that" rather than "who said that".
  const ff = document.getElementById('ff'), fcount = document.getElementById('fcount');
  if (ff){
    const cards = [...grid.querySelectorAll('li')];
    const hay = cards.map(li => fold(li.textContent));
    ff.addEventListener('input', () => {
      const want = fold(ff.value.trim());
      let shown = 0;
      cards.forEach((li, i) => {
        const hit = !want || hay[i].includes(want);
        li.style.display = hit ? '' : 'none';
        if (hit) shown++;
      });
      fcount.textContent = want ? shown + ' of ' + cards.length : '';
    });
  }

  let timer;
  q.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(search, 180); });
  const from = new URLSearchParams(location.search).get('q');
  if (from){ q.value = from; search(); }
  q.focus();
}

async function initEpisode(key){
  const d = await episode(key);
  // Carry the search back with the reader: arriving from a result means "back" should return to
  // that result, not to a list they would have to search again.
  const term = new URLSearchParams(location.search).get('q');
  const back = term
    ? {label: '← Back to results for “' + term + '”',
       href: ROOT + '?q=' + encodeURIComponent(term)}
    : {label: '← All episodes', href: ROOT};
  document.getElementById('app').innerHTML = renderEpisode(d, back);
  document.title = d.title + ' — My Perfect Console';
  wireEpisode();
  floatingBack(back.label, back.href);
  if (location.hash){
    const el = document.getElementById(location.hash.slice(1));
    if (el){
      el.scrollIntoView({block:'center'});
      el.style.background = 'rgba(243,177,178,.18)';
      setTimeout(() => el.style.background = '', 1800);
    }
  }
}

const fmt = n => n.toLocaleString('en-GB');
// 2,143,355 is nine characters and the card is built for three. Shorten the display, keep the
// real number on hover: a headline figure that overlaps its neighbour is worse than a rounded one.
const big = n => n >= 1e6 ? (n/1e6).toFixed(2).replace(/\.?0+$/,'') + 'M'
               : n >= 1e4 ? Math.round(n/1e3) + 'k' : fmt(n);

function rowList(items, max, cls){
  return '<ul class="rows">' + items.map(it =>
    '<li class="row"><span class="lab">' + esc(it.lab) + '</span>'
    + '<span class="val">' + esc(it.val) + '</span>'
    + '<span class="track"><i class="fill' + (cls ? ' ' + cls : '') + '" style="width:'
    + Math.max(2, Math.round(it.n / max * 100)) + '%"></i></span></li>').join('') + '</ul>';
}

// Draws what network_layout already solved. The browser does no layout work: positions, radii
// and communities arrive with the data, so the picture is identical on every load and on every
// machine, which a random-start force simulation could never promise.
const NET_COLOURS = ['#f3b1b2', '#7fd0c1', '#e0b088', '#b9a6cd', '#8fb8d8', '#d59aa8'];

function drawNet(net, note){
  const svg = document.getElementById('net');
  svg.setAttribute('viewBox', '0 0 ' + net.w + ' ' + net.h);
  const at = {};
  net.nodes.forEach(n => at[n.id] = n);
  const maxW = Math.max(1, ...net.edges.map(e => e.w || 1));

  let s = '<g stroke-linecap="round">';
  for (const e of net.edges){
    const a = at[e.a], b = at[e.b];
    if (!a || !b) continue;
    // shared-guest count carries into the line: two guests agreeing is twice the evidence
    const w = (e.w || 1) / maxW;
    s += '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y
       + '" stroke="rgba(243,177,178,' + (0.16 + 0.34 * w).toFixed(2) + ')" stroke-width="'
       + (0.8 + 1.8 * w).toFixed(1) + '"/>';
  }
  s += '</g><g>';
  net.nodes.forEach((n, i) => {
    s += '<circle data-i="' + i + '" cx="' + n.x + '" cy="' + n.y + '" r="' + n.r
       + '" fill="' + NET_COLOURS[n.c % NET_COLOURS.length] + '" fill-opacity=".88"'
       + ' stroke="#04181d" stroke-width="1.5"><title>' + esc(n.id) + ' — ' + n.picks
       + ' picks</title></circle>';
  });
  s += '</g><g font-size="12" font-weight="600" fill="#fff" text-anchor="middle"'
     + ' pointer-events="none" paint-order="stroke" stroke="#04181d" stroke-width="3.5">';
  // Label the hubs, and drop any label that would collide with one already placed: two
  // overlapping names are less legible than one name and a tooltip.
  const placed = [];
  const hit = (a,b) => !(a.x2 < b.x1 || b.x2 < a.x1 || a.y2 < b.y1 || b.y2 < a.y1);
  [...net.nodes].sort((a,b) => b.picks - a.picks || b.deg - a.deg).forEach(n => {
    if (placed.length >= 16) return;
    const txt = n.id.length > 24 ? n.id.slice(0,22) + '…' : n.id;
    const w = txt.length * 6.4, y = n.y - n.r - 6;
    const box = {x1:n.x-w/2-2, x2:n.x+w/2+2, y1:y-11, y2:y+3};
    if (box.x1 < 2 || box.x2 > net.w - 2 || box.y1 < 2) return;
    if (placed.some(p => hit(box,p))) return;
    placed.push(box);
    s += '<text x="' + n.x + '" y="' + y.toFixed(1) + '">' + esc(txt) + '</text>';
  });
  svg.innerHTML = s + '</g>';

  svg.querySelectorAll('circle').forEach(c => {
    const n = net.nodes[+c.dataset.i];
    const say = () => note.innerHTML = '<b>' + esc(n.id) + '</b> — chosen ' + n.picks
      + ' times, and linked to ' + n.deg + ' other game' + (n.deg === 1 ? '' : 's') + ' here'
      + (n.deg === 0
          ? '. Its guests\u2019 other picks were each chosen once or twice, so none of them'
            + ' appear on this chart — it is popular without being part of any cluster.'
          : '.')
      + (n.guests ? '<br>Picked by ' + esc(n.guests.slice(0,4).join(', '))
         + (n.guests.length > 4 ? ' and ' + (n.guests.length-4) + ' more' : '') + '.' : '');
    c.addEventListener('mouseenter', say);
    c.addEventListener('click', say);
  });
}

// A scatter of every episode with a rolling mean through it. The cloud is the honest picture -
// episode length is noisy - and the line is the only way to see whether it is drifting.
function chart(points, opt){
  const W = 900, H = 300, L = 44, R = 12, T = 16, B = 30;
  const vals = points.map(p => p.v);
  const lo = opt.zero ? 0 : Math.floor(Math.min(...vals) / opt.step) * opt.step;
  const hi = Math.ceil(Math.max(...vals) / opt.step) * opt.step;
  const x = i => L + i / Math.max(1, points.length - 1) * (W - L - R);
  const y = v => T + (1 - (v - lo) / (hi - lo || 1)) * (H - T - B);

  let s = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="'
        + esc(opt.label) + '">';
  for (let g = lo; g <= hi; g += opt.step){
    s += '<line x1="' + L + '" x2="' + (W-R) + '" y1="' + y(g).toFixed(1) + '" y2="'
       + y(g).toFixed(1) + '" stroke="rgba(255,255,255,.10)"/>'
       + '<text x="' + (L-8) + '" y="' + (y(g)+4).toFixed(1) + '" text-anchor="end"'
       + ' font-size="11" fill="rgba(255,255,255,.45)">' + g + (opt.unit || '') + '</text>';
  }
  s += '<g fill="' + opt.colour + '" fill-opacity=".45">';
  points.forEach((p, i) => {
    s += '<circle class="pt" cx="' + x(i).toFixed(1) + '" cy="' + y(p.v).toFixed(1) + '" r="3.4"'
       + (p.k ? ' data-k="' + p.k + '"' : '')
       + ' data-label="' + esc(p.t) + '"></circle>';
  });
  s += '</g>';
  // rolling mean, wide enough to be a trend rather than an echo of the scatter
  const win = 11, half = (win - 1) / 2;
  let path = '';
  points.forEach((p, i) => {
    const from = Math.max(0, i - half), to = Math.min(points.length, i + half + 1);
    let sum = 0;
    for (let j = from; j < to; j++) sum += points[j].v;
    const m = sum / (to - from);
    path += (path ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(m).toFixed(1) + ' ';
  });
  s += '<path d="' + path + '" fill="none" stroke="' + opt.colour + '" stroke-width="2.5"'
     + ' stroke-linejoin="round"/>';
  const first = points[0], last = points[points.length-1];
  s += '<text x="' + L + '" y="' + (H-8) + '" font-size="11" fill="rgba(255,255,255,.45)">'
     + esc(first.x) + '</text>'
     + '<text x="' + (W-R) + '" y="' + (H-8) + '" text-anchor="end" font-size="11"'
     + ' fill="rgba(255,255,255,.45)">' + esc(last.x) + '</text>'
     + '<text x="' + ((W+L)/2) + '" y="' + (H-8) + '" text-anchor="middle" font-size="11"'
     + ' fill="rgba(255,255,255,.32)">' + esc(opt.foot) + '</text>';
  return s + '</svg>';
}

function columns(bins, opt){
  const W = 900, H = 240, L = 44, R = 12, T = 16, B = 34;
  const hi = Math.max(...bins.map(b => b.n));
  const bw = (W - L - R) / bins.length;
  let s = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="'
        + esc(opt.label) + '">';
  for (let g = 0; g <= hi; g += opt.step){
    const y = T + (1 - g/hi) * (H - T - B);
    s += '<line x1="' + L + '" x2="' + (W-R) + '" y1="' + y.toFixed(1) + '" y2="' + y.toFixed(1)
       + '" stroke="rgba(255,255,255,.10)"/>'
       + '<text x="' + (L-8) + '" y="' + (y+4).toFixed(1) + '" text-anchor="end" font-size="11"'
       + ' fill="rgba(255,255,255,.45)">' + g + '</text>';
  }
  bins.forEach((b, i) => {
    const h = b.n / hi * (H - T - B), bx = L + i*bw + bw*0.14, bwid = bw*0.72;
    s += '<rect x="' + bx.toFixed(1) + '" y="' + (H - B - h).toFixed(1) + '" width="'
       + bwid.toFixed(1) + '" height="' + Math.max(1,h).toFixed(1) + '" rx="3" fill="'
       + opt.colour + '" fill-opacity=".8"><title>' + esc(b.lab + ': ' + b.n) + '</title></rect>'
       + '<text x="' + (bx + bwid/2).toFixed(1) + '" y="' + (H-12) + '" text-anchor="middle"'
       + ' font-size="11" fill="rgba(255,255,255,.45)">' + esc(b.tick) + '</text>';
  });
  return s + '</svg>';
}

// A dot is an episode, so it should behave like one: say which on hover, open it on click.
function wirePoints(root){
  let tip = document.getElementById('tip');
  if (!tip){
    tip = document.createElement('div');
    tip.id = 'tip'; tip.className = 'tip'; tip.hidden = true;
    document.body.append(tip);
  }
  root.querySelectorAll('circle.pt').forEach(c => {
    const show = e => {
      tip.textContent = c.dataset.label + (c.dataset.k ? ' — open transcript' : '');
      tip.hidden = false;
      const pad = 12;
      tip.style.left = Math.min(e.clientX + pad, innerWidth - tip.offsetWidth - pad) + 'px';
      tip.style.top = (e.clientY + pad) + 'px';
    };
    c.addEventListener('mouseenter', show);
    c.addEventListener('mousemove', show);
    c.addEventListener('mouseleave', () => tip.hidden = true);
    if (c.dataset.k){
      c.style.cursor = 'pointer';
      c.addEventListener('click', () => {
        location.href = ROOT + 'e/' + String(c.dataset.k).padStart(3, '0') + '.html';
      });
    }
  });
}

function renderStats(d){
  const t = d.transcripts, p = d.picks, c = d.childhood;
  if (!t || !t.series || !c || !d.network || !d.airtime){
    document.getElementById('app').innerHTML =
      '<p class="loading">These numbers are from an older build. Reload the page.</p>';
    return;
  }
  const shares = d.transcripts.shares;
  let h = '<header><div class="wrap">'
    + '<p class="eyebrow">My Perfect Console</p><h1>By the numbers</h1>'
    + '<p class="byline">What ' + t.episodes + ' transcribed episodes and '
    + fmt(p.totals.picks) + ' picks add up to.</p></div></header>'
    + '<nav class="wrap nav"><a href="' + ROOT + 'index.html">Transcripts</a>'
    + '<a href="' + ROOT + 'stats.html" aria-current="page">Numbers</a>'
    + '<a href="' + ROOT + 'method.html">How</a></nav>'
    + '<main class="wrap stats">'
    + '<ul class="figures">'
    + '<li class="figure"><b>' + t.episodes + '</b><span>episodes transcribed</span></li>'
    + '<li class="figure"><b>' + fmt(t.hours) + '</b><span>hours of conversation</span></li>'
    + '<li class="figure" title="' + fmt(t.words) + ' words"><b>' + big(t.words)
    + '</b><span>words spoken</span></li>'
    + '<li class="figure"><b>' + fmt(p.totals.picks) + '</b><span>games chosen</span></li>'
    + '<li class="figure"><b>' + fmt(p.totals.titles) + '</b><span>different games</span></li>'
    + '<li class="figure"><b>' + c.episodes + '</b><span>ask about childhood</span></li>'
    + '</ul>';

  // --- who talks
  h += '<h2>Simon and the guest</h2>'
    + '<p class="note">Simon speaks about ' + t.host_share + '% of the words while the guest is'
    + ' there. His sign-off is recorded alone after they\u2019ve gone, so it doesn\u2019t count'
    + ' \u2014 leaving it in put him eight points higher. He\u2019s the one asking the questions,'
    + ' so a fifth sounds about right, but it swings a long way depending on who\u2019s in the'
    + ' chair.</p>'
    + '<div class="split"><i class="h" style="width:' + t.host_share + '%"></i>'
    + '<i class="g" style="width:' + (100 - t.host_share) + '%"></i></div>'
    + '<p class="splitkey"><span class="h"><b>Simon</b> ' + t.host_share + '%</span>'
    + '<span class="g"><b>Guest</b> ' + (100 - t.host_share).toFixed(1) + '%</span></p>';

  const sorted = [...shares].sort((a,b) => a.s - b.s);
  const bins = {};
  for (const x of sorted){ const b = Math.floor(x.s / 5) * 5; bins[b] = (bins[b] || 0) + 1; }
  const lo = Math.min(...Object.keys(bins).map(Number)), hi = Math.max(...Object.keys(bins).map(Number));
  const spread = [];
  for (let b = lo; b <= hi; b += 5)
    spread.push({lab: b + '–' + (b+4) + '%', tick: b, n: bins[b] || 0});
  h += columns(spread, {colour:'#f3b1b2', step: 5, label:"Episodes by Simon's share"})
    + '<p class="cap">' + esc(sorted[0].guest) + ' at ' + sorted[0].s + '% to '
    + esc(sorted[sorted.length-1].guest) + ' at ' + sorted[sorted.length-1].s
    + '% — one column per five points</p>';

  const share = e => ({lab: e.guest || ('Episode ' + e.key), val: e.host_share + '%',
                       n: e.host_share});
  h += '<h2>Where Simon says least</h2><p class="note">Guests who needed no encouragement.</p>'
     + rowList(t.least_host.map(share), 60, 'g')
     + '<h2>And most</h2>'
     + rowList(t.most_host.map(share), 60);

  // --- length
  h += '<h2>How long an episode runs</h2>'
    + '<p class="note">Half of them land within a few minutes of ' + t.median_mins
    + '. Two thirds sit inside a twenty-minute band.</p>'
    + columns(t.lengths.map(b => ({lab: b.at + '–' + (b.at+9) + ' min', tick: b.at, n: b.n})),
              {colour:'#7fd0c1', step: 10, label:'Episodes by length'})
    + '<p class="cap">minutes · one column per ten-minute band</p>';

  const series = t.series;
  const gr = t.growth;
  h += '<h2>Is the show getting longer?</h2>'
    + '<p class="note">' + (gr
        ? 'Yes. The first ' + gr.n + ' episodes averaged <b>' + gr.first + ' minutes</b>; the'
          + ' last ' + gr.n + ' average <b>' + gr.last + '</b>. And nobody\u2019s talking more'
          + ' slowly \u2014 the word counts went up too, from ' + fmt(gr.words_first) + ' to '
          + fmt(gr.words_last) + ' an episode.'
        : 'Every episode as a dot, in broadcast order.')
    + ' Hover a dot for the episode; click to read it.</p>'
    + (gr ? rowList(gr.years.map(y => ({lab: y.y, val: y.mins + ' min · ' + y.n + ' episodes',
                                        n: y.mins})),
                    Math.max(...gr.years.map(y => y.mins)), 'g') : '')
    + chart(series.map(x => ({v: x.m, x: x.d.slice(0,7), k: x.k,
                              t: 'Ep ' + (x.n || x.k) + ' · ' + x.g + ' · '
                                 + Math.round(x.m) + ' min · ' + x.d})),
            {colour:'#f3b1b2', step: 20, unit:'m', label:'Episode length over time',
             foot:'episode length, minutes'});

  h += '<h2>Does Simon talk more or less over time?</h2>'
    + '<p class="note">His share of the words, episode by episode. It\u2019s all over the place,'
    + ' because it depends far more on the guest than on him.</p>'
    + chart(series.filter(x => x.s != null).map(x => ({v: x.s, x: x.d.slice(0,7), k: x.k,
                              t: 'Ep ' + (x.n || x.k) + ' · ' + x.g + ' · Simon '
                                 + x.s + '% · ' + x.d})),
            {colour:'#7fd0c1', step: 10, unit:'%', zero: true,
             label:'Host share over time', foot:"Simon's share of the words"});
  const len = e => ({lab: e.guest || ('Episode ' + e.key), val: Math.round(e.mins) + ' min',
                     n: e.mins});
  h += '<h2>Longest and shortest</h2>'
     + rowList(t.longest.map(len), t.longest[0].mins)
     + rowList(t.shortest.map(len), t.longest[0].mins, 'g');

  // --- what actually got talked about
  const air = d.airtime;
  h += '<h2>The games most talked about</h2>'
    + '<p class="note">Getting picked and getting talked about turn out to be different things.'
    + ' This is the time actually spent on each game, measured from the transcripts: '
    + fmt(air.hours) + ' hours across ' + fmt(air.games) + ' games.</p>'
    + rowList(air.top.map(g => ({lab: g.title, val: g.mins + ' min · ' + g.eps
        + (g.eps === 1 ? ' episode' : ' episodes'), n: g.mins})), air.top[0].mins);

  h += '<h2>The longest anyone has talked about one game</h2>'
    + rowList(air.longest.map(g => ({lab: g.title + ' — ' + g.guest,
        val: Math.round(g.mins) + ' min', n: g.mins})), air.longest[0].mins, 'g');

  // --- the interviewer's opening move
  h += '<h2>Simon asks about your childhood</h2>'
    + '<p class="note">He gets there in <b>' + c.episodes + ' of ' + c.of + ' episodes</b> — '
    + Math.round(c.episodes / c.of * 100) + '% — and asks ' + fmt(c.questions) + ' times in all.'
    + ' Only his own questions count, so a guest bringing it up themselves doesn\u2019t.</p>'
    + '<p class="note">The one he almost never asks is the obvious one. What your'
    + ' <em>first</em> game actually was comes up four times in ' + c.of + ' episodes. He asks'
    + ' about the house you grew up in instead.</p>'
    + rowList(c.phrases.map(x => ({lab: x.lab, val: x.n + '×, in ' + x.eps + ' episodes',
                                   n: x.n})), c.phrases[0].n);
  if (c.samples.length){
    h += '<ul class="rows quotes">' + c.samples.slice(0,4).map(s =>
      '<li class="quote"><a href="' + ROOT + 'e/' + String(s.key).padStart(3,'0') + '.html">'
      + esc(s.guest || ('Episode ' + s.key)) + '</a><p>' + esc(s.q) + '</p></li>').join('')
      + '</ul>';
  }

  // --- picks
  const top = p.most_picked.slice(0, 15);
  h += '<h2>The most chosen games</h2>'
    + '<p class="note">From the show\'s own pick list, across all ' + p.totals.episodes
    + ' episodes — including the Patreon ones whose transcripts are not here.</p>'
    + rowList(top.map(g => ({lab: g.title, val: g.n + ' guests', n: g.n})), top[0].n);

  const once = p.distribution.find(x => x.times === 1);
  h += '<h2>And the long tail</h2>'
    + '<p class="note">' + fmt(once ? once.titles : 0) + ' of the ' + fmt(p.totals.titles)
    + ' games mentioned have only ever been picked once. Most guests agree with nobody.</p>'
    + rowList(p.distribution.map(x => ({
        lab: 'chosen ' + x.times + (x.times === 1 ? ' time' : ' times'),
        val: fmt(x.titles) + (x.titles === 1 ? ' game' : ' games'), n: x.titles})),
      Math.max(...p.distribution.map(x => x.titles)), 'g');

  // --- the consoles: the show's own running joke, and never shown until now
  // --- the picks against the wider record
  const g = d.igdb;
  if (g){
    h += '<h2>When the games came out</h2>'
      + '<p class="note">The median pick came out in <b>' + g.median_year + '</b>. Matched'
      + ' against IGDB, which covers ' + Math.round(g.joined / g.of * 100) + '% of them. The rest'
      + ' are things it doesn\u2019t list \u2014 crosswords, a synthesiser, a bit of performance'
      + ' art, one guest\u2019s own unreleased game.</p>'
      + columns(g.decades.map(x => ({lab: x.at + 's', tick: x.at, n: x.n})),
                {colour:'#f3b1b2', step: 50, label:'Picks by release decade'})
      + '<p class="cap">release decade · ' + fmt(g.joined) + ' picks placed</p>';

    h += '<h2>Critics and players</h2>'
      + '<p class="note">Where IGDB has both scores, critics average <b>' + g.critic_mean
      + '</b> and players <b>' + g.user_mean + '</b>. Near enough the same thing. The arguments'
      + ' are more fun.</p>'
      + '<h3 class="sub">Critics rated these far higher</h3>'
      + rowList(g.critics_liked.map(x => ({lab: x.t,
          val: 'critics ' + x.critic + ' · players ' + x.user, n: x.critic - x.user})),
        Math.max(...g.critics_liked.map(x => x.critic - x.user)))
      + '<h3 class="sub">Players rated these far higher</h3>'
      + rowList(g.players_liked.map(x => ({lab: x.t,
          val: 'players ' + x.user + ' · critics ' + x.critic, n: x.user - x.critic})),
        Math.max(...g.players_liked.map(x => x.user - x.critic)), 'g');
  }

  // --- the show's own vocabulary
  if (d.vocab && d.vocab.length){
    h += '<h2>What it keeps coming back to</h2>'
      + '<p class="note">Not the commonest words \u2014 those are <em>because</em>, <em>some</em>,'
      + ' <em>where</em>, in this and in every other English corpus. These are the words that mark'
      + ' an episode out from the rest of the archive, ranked by how many separate episodes each'
      + ' one defines. Click to search for it.</p>'
      + '<p class="terms big">' + d.vocab.map(w =>
          '<a href="' + ROOT + '?q=' + encodeURIComponent(w.w) + '" title="' + fmt(w.said)
          + ' mentions">' + esc(w.w) + '<span>' + w.n + ' eps</span></a>').join('') + '</p>';
  }

  h += '<h2>What they call the thing</h2>'
    + '<p class="note">Every guest has to name their imaginary console. Most keep it to two or'
    + ' three words. Some really don\u2019t.</p>'
    + '<ul class="rows quotes">' + p.weirdest.slice(0, 8).map(c =>
        '<li class="quote"><a href="' + ROOT + 'e/' + String(c.n).padStart(3,'0') + '.html">'
        + esc(c.guest) + '</a><p>' + esc(c.name) + '</p></li>').join('') + '</ul>'
    + rowList(p.console_word_dist.map(x => ({
        lab: x.words + (x.words === 1 ? ' word' : ' words'),
        val: x.n + (x.n === 1 ? ' console' : ' consoles'), n: x.n})),
      Math.max(...p.console_word_dist.map(x => x.n)), 'g');

  // --- guests who agree
  if (p.guest_pairs && p.guest_pairs.length){
    h += '<h2>Guests who agree</h2>'
      + '<p class="note">Two guests, five picks each, six hundred-odd games to choose from \u2014'
      + ' and they land on the same two or three. It\u2019s happened '
      + p.guest_pairs.length + ' times.</p>'
      + '<ul class="rows quotes">' + p.guest_pairs.slice(0, 6).map(g =>
          '<li class="quote"><a href="' + ROOT + '?q=' + encodeURIComponent(g.shared[0]) + '">'
          + esc(g.a) + ' &amp; ' + esc(g.b) + '</a><p>' + esc(g.shared.join(', ')) + '</p></li>')
        .join('') + '</ul>';
  }

  h += '<h2>Games that travel together</h2>'
    + '<p class="note">Two games are linked when the same guest picked both, and thicker lines'
    + ' mean more guests did it. The colours are clusters \u2014 games that keep turning up'
    + ' together. Bigger circles get picked more. Only games chosen three times or more appear,'
    + ' so a link needs both ends to clear that bar. Tap a game to see who chose it.</p>'
    + '<svg id="net" role="img" aria-label="Games linked when chosen by the same guest"></svg>'
    + '<p class="netnote" id="netnote">Hades and World of Warcraft are chosen as often as'
    + ' Breath of the Wild, but by guests who agree on nothing else.</p>';

  h += '</main><footer class="wrap"><p>These numbers come out of machine transcription, so they'
     + ' inherit its mistakes. The picks themselves are the show\u2019s own.</p></footer>';

  document.getElementById('app').innerHTML = h;
  wirePoints(document.getElementById('app'));
  drawNet(d.network, document.getElementById('netnote'));

}

async function start(){
  try {
    if (PAGE === 'episode') await initEpisode(KEY);
    else if (PAGE === 'stats') renderStats(await getJSON('stats.json'));
    else if (PAGE === 'method') document.getElementById('app').innerHTML = METHOD_HTML;
    else initIndex();
  } catch (err){
    document.getElementById('app').innerHTML =
      '<p class="loading">Could not load this page. ' + esc(err.message) + '</p>';
  }
}
if (GATED) gateBoot(start); else start();
