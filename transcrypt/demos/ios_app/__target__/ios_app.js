// Transcrypt'ed from Python, 2018-04-05 23:20:28
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
var random = {};
var __name__ = '__main__';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);

export var Dice =  __class__ ('Dice', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		document.body.addEventListener ('touchstart', (function __lambda__ (event) {
			return event.preventDefault ();
		}));
		document.body.addEventListener ('mousedown', (function __lambda__ (event) {
			return event.preventDefault ();
		}));
		document.body.style.margin = 0;
		document.body.style.overflow = 'hidden';
		self.all = document.createElement ('div');
		self.all.style.color = 'white';
		self.all.style.backgroundColor = 'black';
		self.all.style.height = '100%';
		self.all.style.width = '100%';
		self.all.style.padding = 0;
		self.all.style.margin = 0;
		document.body.appendChild (self.all);
		self.dices = list ([]);
		for (var index = 0; index < 6; index++) {
			var dice = document.createElement ('div');
			dice.normalColor = (index < 3 ? '#770000' : '#0000ff');
			dice.style.position = 'absolute';
			dice.style.backgroundColor = dice.normalColor;
			dice.addEventListener ('touchstart', (function __lambda__ (aDice) {
				return (function __lambda__ () {
					return self.roll (aDice);
				});
			}) (dice));
			dice.addEventListener ('mousedown', (function __lambda__ (aDice) {
				return (function __lambda__ () {
					return self.roll (aDice);
				});
			}) (dice));
			self.dices.append (dice);
			self.all.appendChild (dice);
			dice.inner = document.createElement ('div');
			dice.inner.setAttribute ('unselectable', 'on');
			dice.inner.style.fontWeight = 'bold';
			dice.inner.style.textAlign = 'center';
			dice.inner.style.position = 'absolute';
			dice.inner.innerHTML = '?';
			dice.appendChild (dice.inner);
		}
		self.banner = document.createElement ('div');
		self.banner.style.position = 'absolute';
		self.banner.style.cursor = 'pointer';
		self.banner.addEventListener ('touchstart', self.gotoTranscryptSite);
		self.banner.addEventListener ('mousedown', self.gotoTranscryptSite);
		self.banner.style.fontFamily = 'arial';
		self.banner.innerHTML = ((('<span id="bannerLarge"><font color="777777">www.<b><i>' + '<font color="ff4422">T<font color="ffb000">r<font color="228822">a<font color="3366ff">n') + '<font color="ff4422">s<font color="ffb000">c<font color="228822">r<font color="3366ff">y<font color="ffb000">p<font color="228822">t') + '</i></b><font color="777777">.org<font size={}><font color="cccccc"></span>') + '<span id="bannerSmall"><i> Write your apps in Python for free!</i></span>';
		self.all.appendChild (self.banner);
		self.bannerLarge = document.getElementById ('bannerLarge');
		self.bannerSmall = document.getElementById ('bannerSmall');
		self.audio = new Audio ('ios_app.mp3');
		window.onresize = self.rightSize;
		self.rightSize ();
	});},
	get gotoTranscryptSite () {return __get__ (this, function (self) {
		document.location.href = 'http://www.transcrypt.org';
	});},
	get roll () {return __get__ (this, function (self, dice) {
		var frameIndex = 10;
		self.audio.play ();
		var frame = function () {
			frameIndex--;
			dice.inner.innerHTML = random.randint (1, 6);
			if (frameIndex) {
				dice.style.color = random.choice (tuple (['red', 'green', 'blue', 'yellow']));
				setTimeout (frame, 100);
			}
			else {
				dice.style.backgroundColor = dice.normalColor;
				dice.style.color = 'white';
			}
		};
		frame ();
	});},
	get rightSize () {return __get__ (this, function (self) {
		self.pageWidth = window.innerWidth;
		self.pageHeight = window.innerHeight;
		var portrait = self.pageHeight > self.pageWidth;
		for (var [index, dice] of enumerate (self.dices)) {
			if (self.pageHeight > self.pageWidth) {
				dice.style.height = 0.3 * self.pageHeight;
				dice.style.width = 0.4 * self.pageWidth;
				dice.style.top = (0.03 + (index < 3 ? index : index - 3) * 0.32) * self.pageHeight;
				dice.style.left = (index < 3 ? 0.06 : 0.54) * self.pageWidth;
				var charBoxSide = 0.3 * self.pageHeight;
				dice.inner.style.top = 0.15 * self.pageHeight - 0.6 * charBoxSide;
				dice.inner.style.left = 0.2 * self.pageWidth - 0.5 * charBoxSide;
				self.banner.style.top = 0.975 * self.pageHeight;
				self.banner.style.left = 0.06 * self.pageWidth;
				self.bannerLarge.style.fontSize = 0.017 * self.pageHeight;
				self.bannerSmall.style.fontSize = 0.014 * self.pageHeight;
			}
			else {
				dice.style.height = 0.4 * self.pageHeight;
				dice.style.width = 0.3 * self.pageWidth;
				dice.style.top = (index < 3 ? 0.06 : 0.54) * self.pageHeight;
				dice.style.left = (0.03 + (index < 3 ? index : index - 3) * 0.32) * self.pageWidth;
				var charBoxSide = 0.4 * self.pageHeight;
				dice.inner.style.top = 0.2 * self.pageHeight - 0.6 * charBoxSide;
				dice.inner.style.left = 0.15 * self.pageWidth - 0.5 * charBoxSide;
				self.banner.style.top = 0.95 * self.pageHeight;
				self.banner.style.left = 0.03 * self.pageWidth;
				self.bannerLarge.style.fontSize = 0.015 * self.pageWidth;
				self.bannerSmall.style.fontSize = 0.012 * self.pageWidth;
			}
			dice.inner.style.height = charBoxSide;
			dice.inner.style.width = charBoxSide;
			dice.inner.style.fontSize = charBoxSide;
		}
	});}
});
export var dice = Dice ();

//# sourceMappingURL=ios_app.map